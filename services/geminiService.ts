
import { GoogleGenAI, Type } from "@google/genai";
import type { GeneratedSpecs } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    spec: {
      type: Type.STRING,
      description: "The full content of a detailed technical specification (spec.md) in Markdown format. This should cover architecture, data models, API endpoints, and key technical decisions.",
    },
    task: {
      type: Type.STRING,
      description: "The full content of a detailed task breakdown (task.md) in Markdown format. This should break down the project into epics, user stories, and individual tasks, suitable for a project management tool.",
    },
    plan: {
      type: Type.STRING,
      description: "The full content of a project development plan (plan.md) with a timeline in Markdown format. This should outline sprints or phases, milestones, and estimated timelines for completion.",
    },
  },
  required: ["spec", "task", "plan"],
};

export const generateSpecs = async (projectDescription: string): Promise<GeneratedSpecs> => {
  const systemInstruction = `You are an expert engineering manager and project planner. Your task is to analyze a project description and generate three comprehensive documents: a technical specification, a task breakdown, and a development plan.
  
  Instructions:
  1.  **Technical Specification (spec.md)**: Detail the technical architecture, data models, API contracts, security considerations, and technology stack. Be precise and thorough.
  2.  **Task Breakdown (task.md)**: Create a hierarchical list of tasks. Start with high-level epics, break them into user stories, and then into specific, actionable development tasks.
  3.  **Development Plan (plan.md)**: Propose a realistic project timeline. Organize the tasks into sprints or phases, define key milestones, and estimate the duration for each phase.
  
  The output must be a valid JSON object adhering to the provided schema. The content for each document must be in well-structured Markdown.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: projectDescription,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.2, // Lower temperature for more deterministic, structured output
      },
    });

    const jsonText = response.text.trim();
    // Although Gemini is instructed to return JSON, it may sometimes have markdown fences.
    const cleanJsonText = jsonText.replace(/^```json\n?/, '').replace(/\n?```$/, '');
    const parsedJson = JSON.parse(cleanJsonText);

    if (
      typeof parsedJson.spec === 'string' &&
      typeof parsedJson.task === 'string' &&
      typeof parsedJson.plan === 'string'
    ) {
      return parsedJson;
    } else {
      throw new Error("Invalid JSON structure received from API.");
    }

  } catch (error) {
    console.error("Error generating specs:", error);
    throw new Error("Failed to generate project specifications. Please check the console for details.");
  }
};
