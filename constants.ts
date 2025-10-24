
export const EXAMPLE_PROJECT_DESCRIPTION = `# Blood Donation Platform - SpecKit Generation Prompt

Generate comprehensive specification, task breakdown, and development plan for a blood donation web application with dual-profile system, real-time matching, secure communication, and Rotaract club integration.

## Project Overview
Create a comprehensive blood donation platform that connects blood donors with recipients through intelligent matching, real-time communication, and integrated club management for Rotaract International Districts 3233 & 3234.

## Core Product Requirements

### 1. User Management & Authentication
- *Dual-Profile System*: Separate registration flows and dashboards for donors and recipients
- *Multi-Factor Verification*: Email/phone validation, optional document upload verification, Google OAuth integration
- *Comprehensive Data Collection*: Blood type, medical history, location data, emergency contacts
- *Medical Screening*: Integrated eligibility questionnaire during registration
- *Rotaract Integration*: Special registration pathway for club members with verification system

### 2. Intelligent Matching System
- *Smart Matching Algorithm*: Real-time compatibility matching based on:
  - Blood type compatibility (including universal donor logic)
  - Geographic proximity with radius-based search
  - Donor availability status and previous donation history
- *Interactive Map Interface*: Privacy-protected location visualization (area-level, not pinpoint)
- *Hospital Priority System*: Partner hospitals prioritized in search results
- *Advanced Filtering*: Distance, availability, blood type, verification status

### 3. Real-Time Communication (Rapido-Style)
- *Secure In-App Messaging*: End-to-end encrypted chat between donor-recipient pairs
- *OTP Verification System*: 
  - Recipients generate 6-digit time-limited OTPs (15-30 minutes)
  - Donors enter OTP to confirm donation completion
  - Automated donation logging with timestamp verification
- *Push Notifications*: Urgent blood request alerts to eligible donors
- *Quick Response Templates*: Pre-defined messages for common scenarios
- *Emergency Override*: Medical professional bypass for critical situations

### 4. Tracking & Analytics
- *Donation History Dashboard*: Personal logbook with detailed tracking
- *Eligibility Tracking*: Next donation date calculation and reminders
- *Statistics Dashboard*: Donation counts, lives saved, impact metrics
- *Post-Donation Follow-up*: Automated thank you messages and health tips

### 5. Rotaract Club Management
- *Club Directory*: Participating clubs from RID 3233 & 3234
- *Club Dashboard*: Member roster, donation activities, leaderboards
- *Event Management*: Blood drive organization and coordination tools
- *Service Hour Logging*: Automatic tracking for Rotaract service requirements

## Technical Requirements

### Frontend Architecture
- *Framework*: React.js with TypeScript for type safety
- *UI Design*: Soft neuromorphic design system with medical-friendly aesthetics
- *State Management*: Redux Toolkit or Zustand for complex state handling
- *Progressive Web App*: PWA capabilities with offline support
- *Maps Integration*: Google Maps JavaScript API for location services
- *Real-time*: Socket.io client for live communication

### Backend Architecture
- *Runtime*: Node.js with Express.js framework
- *Database*: Supabase for real-time data synchronization
- *Authentication*: Supabase Auth with OAuth providers
- *File Storage*: Supabase Storage for document management
- *Real-time Communication*: Socket.io for WebSocket connections
- *External Services*: Twilio for SMS, SendGrid for emails

### Security & Compliance
- *Data Protection*: HIPAA-equivalent medical data handling
- *Encryption*: End-to-end encryption for all sensitive communications
- *Location Privacy*: Anonymized location sharing with area-level precision
- *Audit Logging*: Comprehensive logging for medical data access
- *Rate Limiting*: API endpoint protection against abuse

### Design System Requirements
- *Neuromorphic UI*: Soft shadows, subtle elevations, rounded corners
- *Color Palette*: Medical blues (#4A90E2), warm reds (#E85D75), neutral grays
- *Typography*: Clean, accessible fonts (Inter, Poppins)
- *Responsive Design*: Mobile-first approach with touch-friendly interactions
- *Accessibility*: WCAG 2.1 AA compliance, screen reader support

## Key User Flows

### Primary Flows
1. *Donor Registration & Verification*: Multi-step registration → medical screening → document verification → profile activation
2. *Blood Request Creation*: Recipient creates urgent request → system matches donors → notifications sent → communication initiated
3. *Donation Process*: Donor responds to request → chat communication → meet coordination → OTP verification → donation completion
4. *Rotaract Blood Drive*: Club officer creates event → member recruitment → donor coordination → event execution → reporting

### Secondary Flows
1. *Hospital Emergency Request*: Medical professional override → bulk donor notification → priority matching
2. *Profile Management*: Update personal information → modify privacy settings → manage notifications
3. *History & Tracking*: View donation history → track eligibility → access certificates → export reports

## Business Logic Requirements

### Matching Algorithm
- *Blood Type Compatibility*: Universal donor logic (O- to all, AB+ from all)
- *Geographic Proximity*: Configurable radius search (5km, 10km, 25km, 50km)
- *Availability Scoring*: Active status, response history, last donation date
- *Hospital Priority*: Partner hospitals get 2x matching priority
- *Emergency Escalation*: Critical requests expand search radius automatically

### Notification System
- *Priority Levels*: Critical (immediate), Urgent (within 1 hour), Standard (within 24 hours)
- *Escalation Logic*: If no response in 15 minutes, expand to next radius tier
- *User Preferences*: Customizable notification settings per urgency level
- *Quiet Hours*: Respect user-defined do-not-disturb periods

### Data Privacy & Security
- *Location Anonymization*: Show approximate area, not exact coordinates
- *Communication Privacy*: Encrypted messages, no personal info sharing until consent
- *Medical Data Handling*: Segregated storage, access logging, retention policies
- *User Consent Management*: Granular privacy controls, easy opt-out mechanisms

## Integration Requirements

### External Services
- *Google Maps Platform*: Location services, geocoding, directions
- *Twilio*: SMS notifications, phone number verification
- *SendGrid*: Email notifications, system communications
- *Google OAuth*: Social login integration
- *Push Notification Services*: Firebase Cloud Messaging or similar

### Rotaract Integration
- *Club Database*: Integration with Rotaract district records
- *Member Verification*: Cross-reference with club membership data
- *Service Hours*: Automatic logging and reporting to district systems
- *Event Coordination*: Calendar integration with club activities

## Performance & Scalability Requirements

### Performance Targets
- *Page Load Time*: < 2 seconds for initial load
- *Real-time Messaging*: < 200ms message delivery
- *Map Rendering*: < 3 seconds for donor location display
- *Search Results*: < 1 second for location-based matching

### Scalability Considerations
- *Concurrent Users*: Support 1000+ simultaneous users
- *Database Scaling*: Horizontal scaling capabilities
- *Real-time Connections*: Handle 500+ concurrent WebSocket connections
- *Geographic Distribution*: Multi-region deployment ready

## Quality Assurance Requirements

### Testing Strategy
- *Unit Testing*: 80%+ code coverage requirement
- *Integration Testing*: API endpoints and database interactions
- *End-to-End Testing*: Critical user flows automation
- *Security Testing*: Penetration testing for medical data protection
- *Performance Testing*: Load testing under expected user volumes

### Monitoring & Analytics
- *Application Performance Monitoring*: Real-time error tracking
- *User Analytics*: Donation success rates, user engagement metrics
- *Medical Compliance Monitoring*: Audit trail verification
- *System Health Monitoring*: Database performance, API response times

## Deployment & Infrastructure

### Development Environment
- *Version Control*: Git with feature branch workflow
- *CI/CD Pipeline*: Automated testing and deployment
- *Environment Management*: Development, staging, production environments
- *Code Quality*: ESLint, Prettier, TypeScript strict mode

### Production Infrastructure
- *Hosting Platform*: Vercel/Netlify for frontend, Railway/Heroku for backend
- *Database*: Supabase managed PostgreSQL
- *CDN*: Global content delivery for optimal performance
- *SSL/TLS*: End-to-end encryption in transit
- *Backup Strategy*: Daily automated backups with point-in-time recovery

## Success Metrics & KPIs

### Primary Metrics
- *Donation Success Rate*: Percentage of requests fulfilled within 24 hours
- *User Engagement*: Monthly active users, session duration
- *Response Time*: Average time from request to first donor response
- *Geographic Coverage*: Percentage of area covered by active donors

### Secondary Metrics
- *Registration Conversion*: Percentage completing full verification
- *Retention Rate*: 30-day and 90-day user retention
- *Club Participation*: Rotaract member engagement levels
- *System Reliability*: Uptime percentage, error rates

## Compliance & Legal Requirements

### Medical Data Compliance
- *HIPAA-Equivalent Standards*: Medical information protection
- *Data Retention Policies*: Secure deletion of expired data
- *User Consent Management*: Clear opt-in/opt-out mechanisms
- *Cross-Border Data Transfer*: Compliance with local regulations

### Accessibility Standards
- *WCAG 2.1 AA Compliance*: Full accessibility support
- *Multiple Language Support*: English and Tamil localization
- *Screen Reader Compatibility*: Complete navigation support
- *Keyboard Navigation*: Full functionality without mouse
`;
