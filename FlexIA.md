
Introduction to Flex.IA: The Central Hub for Independent Adjusters
What is Flex.IA?
Flex.IA is the revolutionary platform built exclusively for independent insurance adjusters (IAs). It's your single, customizable command center designed to eliminate the chaos of managing claims across multiple firms. Stop juggling separate portals and notifications – Flex.IA seamlessly connects ALL your partnered IA firms (150+ and growing!) into one intuitive dashboard. This is where you get new claims, manage your workload, and access every tool you need.
What is Flex.IA For?
Flex.IA empowers independent adjusters to:
Centralize & Control: Connect and manage claims from ALL your partnered IA firms (150+) in one unified dashboard.
Never Miss an Opportunity: Get instant notifications the moment a firm in your network posts a new claim.
Maximize Income Potential: Leverage advanced analytics to track earnings, identify high-value opportunities, and optimize your workload.
Command Your Performance: Tailor-make your dashboard with 20+ widgets to monitor KPIs, track growth, and stay laser-focused on goals.
Streamline Operations: Simplify scheduling, routing, deadline tracking, and communication – all from your central hub.
Secure & Organize: Safely store and manage all documents, files, and claim data in a central, cloud-based vault.
What Does Flex.IA Do?
Flex.IA provides a comprehensive suite of features tailored to the unique needs of independent adjusters:
Unified Claims Hub: See, track, and manage all your claims from your entire network of 150+ partnered firms in a single dashboard. Get new claim alerts instantly.
Custom Performance Dashboard: Build your ultimate command center with 20+ configurable widgets. Track real-time KPIs, earnings trends, claim volume, completion rates, and growth metrics – all tailored to your priorities.
Earnings Optimizer: Gain actionable insights into income streams, claim values, and profitability to maximize your earning potential.
Expansive Firm Network: Access, connect with, and receive claims directly from our curated network of 150+ top-tier insurance firms – all centralized in Flex.IA.
Smart Scheduling & Routing: Intelligently manage your calendar with automated scheduling, optimized route planning, and proactive deadline reminders.
Integrated Communication Hub: Streamline all messaging with firms, claimants, and your team directly within the platform.
Secure Document Vault: Store, organize, and access all essential claim documents, photos, reports, and files securely in the cloud.





#FILES






#Pricing Plan

- **Flex.IA Pro**: A single, all-inclusive plan that provides access to all features of the platform.
  - **Monthly**: $97/month
  - **Yearly**: $82/month (billed annually at $984/year































/


















 Core Functional Scope (You must fully handle):
Firm Connector & Headless Login
Users input:
IA firm portal URL
Login credentials (email + password)
Optional API key
Store credentials securely (encrypted)
Automatically log into firm portals using Playwright
Support all login types: normal, CAPTCHA, MFA, custom forms
Trigger headless scraping sessions on-demand or on a schedule.
Flawless Headless Automation
Playwright must:
Fully scrape the entire IA firm portal
Detect and interact with every available feature, tab, button, and form
Extract all claim data, documents, updates, messages, user actions, etc.
Detect new claims in real-time and instantly send to Flex.IA
This scraping system must be modular, testable, and fault-tolerant
Flawlessly handle login flows for each IA firm portal, even with MFA, CAPTCHAs, or unique flows.
Fully scrape the entire firm portal:
All pages
All features and actions
All user-accessible data
Detect any new claims or updates immediately
Ensure the scraped data is fully structured and synced to Flex.IA in real time.
Implement monitoring, logging, and retry logic for scraper stability.
 Send result to Supabase API
 Log success/failure
9. Error Handling & Logs
 Log screenshots and error tracebacks
 Handle CAPTCHAs, MFA, page load delays
10. Scheduler & Re-check
 Use cron or job queues to re-scrape every 5–10 mins
 Detect new claims
 Push changes to Flex.IA UI and send alerts


 LATENODE MIGRATION (Optional Later)
Latenode Setup
 Migrate headless workflows to visual node automation
 Integrate Playwright modules
 Create fallback triggers if Latenode fails


Real-Time Notifications
Flex.IA users must be instantly notified when new claims are posted, updated, or status changes
Use Supabase Realtime or a push notification system
Users must get instant updates (in-app + push notifications) when claim status or data changes.
Ensure real-time sync across all relevant dashboards and components.

Stripe Billing
Implement plan-based billing with Stripe
Plans should determine:
Number of firm connections
Data access
AI/Gemini features
Notification frequency
Supabase Backend
Set up all database tables and functions
Design a secure, scalable schema to handle:
Users
Firms
Claims
Sessions
Billing metadata
Notification logs










### * Global Design System & UI Kit** *This is not a user-facing module but a foundational developer and design resource that governs the entire platform's look and feel.***Purpose:**To establish a single source of truth for all visual and interactive elements across the Flex.IA platform. This ensures brand consistency, accelerates development and design, improves usability, and creates a polished, intuitive, and professional user experience across all 24 modules and on any device.  **🔧 Core Components & Specifications:** ✅ **Color Palette** A defined and named color palette to be used consistently for specific purposes. *   **Primary Colors:** The main brand colors used for primary buttons, active navigation, and key calls-to-action (e.g., `flex-blue-500`). *   **Secondary/Accent Colors:** Colors used for secondary actions, highlights, or specific branding elements. *   **Neutral/Grayscale:** A full spectrum of grays (`gray-50` to `gray-900`) used for text, backgrounds, borders, and disabled states. *   **Semantic Colors:** Dedicated colors for system feedback:     *   `Success` (Green): For successful operations, "Paid" invoices, "Active" licenses.     *   `Warning` (Yellow/Amber): For alerts, "Expiring Soon" statuses, pending actions.     *   `Danger/Error` (Red): For errors, "Overdue" invoices, "Expired" licenses, deletion actions.     *   `Info` (Blue/Cyan): For informational tooltips and neutral notifications.  ✅ **Typography System** A clear typographic hierarchy to guide the user's eye and establish information structure. *   **Font Family:** A chosen primary font (e.g., Inter, Poppins) for all UI text, optimized for readability on screens. A secondary or monospace font may be defined for code or data tables. *   **Heading Scale:** Defined sizes and weights for headings (H1, H2, H3, H4) used for page titles, module titles, and section headers. *   **Body & UI Text:** Defined sizes for standard paragraph text, labels, input fields, and smaller helper text.  ✅ **Iconography Library** A comprehensive, consistent set of icons to represent actions and objects throughout the application. *   **Style:** A single, consistent style (e.g., Line, Solid, or Duotone). *   **Library:** Sourced from a professional library (e.g., Font Awesome, Material Icons, Feather Icons) or custom-designed. *   **Usage Guidelines:** Clear rules on sizing, color, and placement for icons used in buttons, navigation, and alerts.  ✅ **Layout & Spacing** A standardized system for spacing and layout to create visual rhythm and consistency. *   **Grid System:** A defined responsive grid (e.g., 12-column) that underpins all page layouts. *   **Spacing Scale:** A defined scale based on a base unit (e.g., 4px or 8px) for all margins, padding, and gaps between elements. This ensures consistent spacing everywhere.  ✅ **Core UI Components (The UI Kit)** A library of reusable, pre-built components that form the building blocks of every module. *   **Buttons:** Defined styles for `Primary`, `Secondary`, `Tertiary/Text`, and `Destructive` buttons, with clear `hover`, `focus`, `active`, and `disabled` states. *   **Forms & Inputs:** Consistent styling for all form elements: text inputs, text areas, dropdowns/selects, checkboxes, radio buttons, and toggles. Includes styles for labels, helper text, and validation/error states. *   **Cards & Panels:** The standard "container" style for widgets on the dashboard, claim cards in a list, and info panels. Includes rules for shadows, borders, and padding. *   **Modals & Dialogs:** Standardized layout and behavior for pop-up modals. *   **Navigation Elements:** Styling for the main sidebar, tabs, breadcrumbs, and pagination. *   **Tables:** A consistent design for all data tables. *   **Alerts & Notifications:** Pre-defined components for inline alerts and "toast" notifications.  **🧠 Intelligent & Dynamic Features:** **Dark Mode / Theming:** The entire design system is built with theming in mind. All colors are defined as variables, allowing for a seamless switch between a default "Light Mode" and a user-selectable "Dark Mode".  **Accessibility (a11y) Compliance:** All components are designed and built to meet WCAG 2.1 AA standards. This includes ensuring sufficient color contrast, proper use of ARIA attributes for screen readers, and full keyboard navigability.  **🎛️ Customization Options:** *   **Theme Selection:** User can choose between Light Mode, Dark Mode, or "System" default. *   **Text Size:** Users can select a slightly larger or smaller base text size to improve readability.  **🔐 Access & Permissions:** The design system itself is a resource for the Flex.IA development team. Its output—the UI—is what all users interact with.  **🤝 Integrations:** The Design System is the foundational integration for the entire platform. It ensures that when the `Claims` hub uses a button and the `Earnings` module uses a button, they look and behave identically.  **📱 Mobile Adaptability:** The design system is inherently responsive. All components, typography, and spacing are designed to adapt gracefully from a large desktop monitor down to a small mobile screen.  **🧩 Visual Layout Components:** This entire system is the definition of the visual layout components. It is the master blueprint that dictates the visual DNA of Flex.IA, ensuring a consistent, beautiful, and usable experience across every single one of the 24 user-facing modules.



### : Mobile Companion App Features** *This is not a single module, but a collection of mobile-first functionalities that define the native app experience.*  **Purpose:** To outline the key, mobile-first features that make the Flex.IA companion app an indispensable tool for the adjuster in the field, enabling them to capture data accurately, work efficiently without cell service, and perform critical tasks away from the desk.  **🔧 Core Features & Functionality:** ✅ **Offline Mode** The cornerstone of the mobile app. *   **Proactive Caching:** When a route is planned for the day, the app automatically downloads and caches all essential claim data, notes, contacts, and checklists for those appointments. *   **Offline Work:** The IA can view claim details, add new notes, take photos, and complete checklist tasks entirely offline. *   **Automatic Syncing:** As soon as the device regains an internet connection, the app automatically syncs all offline work back to the cloud platform in the background.  ✅ **Photo Upload with Geo-Tagging & Notes** A streamlined camera interface designed for evidence capture. *   **In-App Camera:** Take photos directly within the app, which are automatically saved to the correct claim folder in the `Vault`. *   **Automated Data:** Photos are automatically timestamped and geo-tagged with GPS coordinates. *   **Voice-to-Text Captions:** After taking a photo, the IA can immediately dictate a caption using voice-to-text, providing crucial context.  ✅ **On-Site Check-In/Check-Out** A large, easy-to-tap button within the mobile claim view. *   **One-Tap Logging:** Logs arrival and departure times at an inspection site. *   **Timeline Entry:** Creates a timestamped and geo-tagged entry in the claim's timeline, providing an indisputable record of time on site.  ✅ **Voice-to-Text Everywhere** Deep integration of the device's voice dictation capabilities throughout the mobile app. *   **Hands-Free Notes:** Dictate detailed claim notes, call summaries, and narratives. *   **Message Composition:** Compose emails and SMS messages without typing.  **🧠 Intelligent Features:** **Photo Grouping Suggestions:** Using the timestamps and location data, the app can automatically group photos into albums like "Exterior," "Living Room," or "Roof," based on when and where they were taken during the inspection.  **Smart Reminders:** The app can use location awareness to provide smart reminders, e.g., "You have arrived at the inspection for Claim #1234. Don't forget to take a photo of the policyholder's ID."  **🎛️ Customization Options:** *   The user can configure the quality/resolution of uploaded photos to manage data usage. *   The user can customize which data is downloaded for offline access.  **🔐 Access & Permissions:** The mobile app adheres to the same strict user permissions as the web platform. It uses secure on-device storage for offline data.  **🤝 Integrations:** The mobile app is a client for the entire Flex.IA ecosystem, with particularly deep integrations with: *   **Vault:** The destination for all photos and the source for offline documents. *   **Claims:** The source for all claim data. *   **Route Planner:** The primary driver for the daily offline cache. *   **Device Hardware:** Deeply integrates with the camera, GPS, and microphone.  **📱 Mobile Adaptability:** This module *is* the definition of mobile adaptability.  **🧩 Visual Layout Components:** *   **Large, Touch-Friendly Targets:** Buttons and navigation elements are designed for easy use with a thumb. *   **Native UI Elements:** Uses native iOS and Android components for a fast, familiar, and responsive experience. *   **Clear Offline Indicator:** A persistent, clear visual indicator that shows when the app is in offline mode and when it is syncing. *   **Progress Indicators:** Visual feedback for uploads and sync status.















#UI COMPONENT MAP



# 🌐 Public-Facing Pages

## 📄 Landing Page (`app/page.tsx`)

### Layout & Style
- A single-column, responsive layout with a gradient background.
- Sections are clearly defined with distinct styling.

### Sections
- **Hero Section**: A large, centered headline with a primary call-to-action button.
- **Navigation Bar**: A sticky navigation bar with links to the login and signup pages.
- **Stats Section**: A grid of cards displaying key metrics.
- **Features Section**: A grid of cards highlighting the key features of the platform.
- **Pricing Section**: A section with a toggleable monthly/yearly pricing plan.
- **AI Automation Waitlist Section**: A form to sign up for early access to the upcoming AI automation features.
- **Call-to-Action Section**: A final call-to-action at the bottom of the page.

## 💳 Checkout Page (`app/checkout/page.tsx`)

### Layout
- A single-column layout with a clear, step-by-step process.

### Sections
- **Order Summary**: A summary of the selected plan and the total cost.
- **Payment Information**: A form to enter credit card details.
- **Billing Information**: A form to enter billing details.

## 🔐 Authentication Pages (`app/auth/*`)

### Login Page (`app/auth/login/page.tsx`)
- **Layout**: A centered form with the application logo.
- **Components**:
  - `Input`: For email and password.
  - `Button`: To submit the form.
  - `Link`: To the signup and forgot password pages.

### Signup Page (`app/auth/signup/page.tsx`)
- **Layout**: A centered form, consistent with the login page.
- **Components**:
  - `Input`: For name, email, and password.
  - `Button`: To submit the form.
  - `Link`: To the login page.

---

# 🗺️ Main Site Structure

## 🧭 Sidebar Navigation (`components/dashboard-layout.tsx`)

- **Purpose**: The primary navigation hub for the authenticated user, providing access to all major sections of the application.
- **Layout**: A collapsible vertical sidebar on the left side of the screen.
  - **Expanded State**: Shows the icon and the full name of each page.
  - **Collapsed State**: Shows only the icons for a more compact view. The user can hover over the icons to see a tooltip with the page name.
- **Toggle Functionality**: A button at the top of the sidebar allows the user to toggle between the expanded and collapsed states. The user's preference is saved in `localStorage`.
- **Pages**:
  - **Dashboard**: The main overview page.
  - **Claims**: The central hub for all claim-related activities.
  - **Messages**: The communication center for all messages.
  - **Earnings**: The section for tracking all financial data.
  - **Firms**: The section for managing connections with firms.
  - **Calendar**: The user's schedule and appointments.
  - **Analytics**: The section for viewing performance metrics.
  - **Vault**: The secure storage for all documents.
  - **Settings**: The section for configuring user and application settings.
  - **Admin Panel**: The section for administrators to manage the application.
- **AI Assistant**:
  - **Location**: A dedicated section at the bottom of the sidebar.
  - **Functionality**: A chat interface that allows the user to interact with an AI assistant for help and support.

## 🔝 Top Bar Navigation (`components/dashboard-layout.tsx`)

- **Purpose**: To provide access to global actions and user-specific information.
- **Layout**: A horizontal bar at the top of the main content area.
- **Features**:
  - **Global Search**: A search bar for finding claims, firms, messages, and other information across the entire application.
  - **Theme Toggle**: A button to switch between light and dark themes.
  - **Notifications**: A dropdown menu that displays a list of recent notifications. The user can mark notifications as read or delete them.
  - **User Menu**: A dropdown menu with links to the user's profile, settINGS



### **Module #1: Main Dashboard**
*Corresponds to the **Dashboard** page in the sidebar navigation.*


**Purpose:**
To provide the IA with an immediate, high-level, and actionable overview of their entire operation. This is the first page the user sees upon logging in, and it is designed to instantly answer the question, "What do I need to focus on right now?" A fluid, drag-and-drop interface where the user can add, remove, and resize various summary widgets (mini-versions of the main modules) to create their perfect overview. The layout is saved automatically to the user's profile.

**🔧 Core Features & Functionality:**
✅ **Customizable Widget-Based Layout**
A dynamic, grid-based system where the user can add, remove, and rearrange widgets to suit their workflow.
*   **Drag-and-Drop Interface:** Users can click and hold to move widgets around the grid.
*   **Resizable Widgets:** Users can resize widgets to give more prominence to a particular data point.
*   **Add/Remove Widgets:** A simple interface to add new widgets from a library or remove existing ones.



**🎛️ Customization Options:**
The entire dashboard is customizable. The user can save multiple dashboard layouts (e.g., "Daily View," "Financial Focus View," "CAT Mode View") and switch between them with a dropdown menu.

**🔐 Access & Permissions:**
This dashboard is entirely personal and private to the logged-in IA, reflecting only their data.

**🤝 Integrations:**
This module is a "read-only" aggregator that pulls summary data from:
*   **Claims Hub:** For new claim alerts and deadline counts.
*   **Earnings & Financials:** For the MTD Earnings KPI.
*   **Calendar:** For the Upcoming Agenda panel.
*   **Messages:** For recent message notifications.
*   **Licensing & Compliance Tracker:** For expiration alerts.

**📱 Mobile Adaptability:**
The mobile dashboard is a non-customizable, stacked view of the most critical widgets: KPIs, Agenda, and Recent Activity, designed for quick, at-a-glance updates.

**🧩 Visual Layout Components:**
*   **Modular Grid System:** Allows for flexible arrangement of widget panels.
*   **Data-Rich Cards:** Each panel is a "card" with clear titles and data.
*   **Clean Typography & Icons:** Large, readable fonts for KPIs and intuitive icons for quick recognition.
*   **Interactive Elements:** KPIs and list items are clickable, navigating the user to the relevant detailed page.



#✅ **DASHBOARD WIDGETS**

### Widget #1**Claims Feed**: Unified Claims Feed
**Purpose:**  
Aggregate new claim assignments from all 150+ partnered IA firms into a single real-time stream, eliminating portal-hopping and ensuring zero missed opportunities.  

🔧 **Core Features & Functionality:**  
✅ Live Claim Ticker - Auto-refreshing feed showing newest assignments first  
✅ Multi-Firm Filter - Toggle visibility by specific firms or carrier types  
✅ Claim Preview - See assignment type (auto, property, catastrophe), estimated fee, and due date  
✅ One-Click Assignment - Accept claims directly in the widget  
✅ Urgency Indicators - Color-coded priority flags based on SLA timelines  

✅ **Master Claims Dashboard**
A dynamic grid or list view of all claims. Each "Claim Card" is rich with at-a-glance information:
*   **Source Firm Indicator:** The prominent logo and name of the firm that assigned the claim.
*   **Key Identifiers:** Claim ID, Insured Name, Policy Number, and City/State.
*   **Urgency Indicator:** A color-coded Deadline Countdown (e.g., Green >7 days, Yellow 2-7 days, Red <48 hours).
*   **Live Status Badge:** A clear, customizable tag showing the current stage (e.g., New, Acknowledged, Contact Attempted, Scheduled, Report Submitted, Closed).

✅ **Smart Filters & Saved Views**
A persistent sidebar allowing the IA to instantly narrow down the claims list.
*   **Filter By:** **Source Firm**, Status, Claim Type (CAT/Daily), Date Range, Deadline Proximity, or Location.
*   **Saved Views:** Save complex filter combinations as presets (e.g., "All Unscheduled CAT Claims for Firm X," "All Claims Pending Submission This Week").

✅ **Detailed Claim View (Slide-In Panel)**
Clicking a Claim Card opens a comprehensive detail panel without leaving the main dashboard, featuring tabs for:
*   **Timeline:** A chronological, immutable log of every action: status changes, notes, calls, documents uploaded, and scheduled events.
*   **Documents:** A direct view into the claim's folder in the `Vault`.
*   **Tasks:** A dynamic checklist of required tasks for the claim.
*   **Contacts:** All associated contacts (insured, contractor, agent) with click-to-call/email functionality.
*   **Financials:** A summary of logged expenses and invoice status for the claim.

✅ **Direct & Bulk Actions**
Functionality designed to eliminate clicks and streamline workflows.
*   **Acknowledge Claim:** A one-click action on a "New" claim card that notifies the source firm that the assignment has been received and accepted.
*   **Update Status:** A simple dropdown on each card to update the claim status, which can automatically notify the source firm via the Client & Carrier Portal.
*   **Bulk Actions:** Use checkboxes to select multiple claims (even from different firms) to add to a single route plan in the Route Planner.


🧠 **Intelligent Features:**  
**SLA Breach Alerts:**
The system understands the unique Service Level Agreements (SLAs) for different firms (e.g., "Contact insured within 24 hours," "Submit report within 72 hours of inspection") and provides proactive visual warnings on the claim card if a deadline is at risk.
**Next Action Suggestion:**
Based on the claim's current status and the firm's typical workflow, the `AI Assistant` suggests the most likely next step (e.g., "Status is 'Contact Attempted'. Suggest creating a follow-up task for tomorrow?").

📊 **Insights & Reporting:**  
Real-time visibility into claim volume trends across your entire firm network  

🎛️ **Customization Options:**  
Create custom filters for preferred claim types, minimum fees, or specific carriers
  
AI-Priority Scoring - Algorithm ranks claims by profit potential based on your historical data
  
Geo-Matching - Highlights assignments within your preferred working radius  



**🤝 Integrations:**
*   **Firms:** The core integration, receiving new claim data via API.
*   **Calendar:** Syncs scheduled inspections and deadlines.
*   **Route Planner:** Pushes property addresses for route optimization.
*   **Vault:** Acts as the file system for the "Documents" tab.
*   **Messages:** Logs all communications in the "Timeline" tab.
*   **Earnings:** Populates the "Financials" tab within the claim view.


📱 **Mobile Adaptability:**  
Push notifications with claim details + one-tap acceptance  
*   A clean, touch-friendly list view of all claims.
*   Ability to perform key actions like updating status or adding a quick note.
*   The detailed claim view is optimized for vertical screens.


**🧩 Visual Layout Components:**
*   **Card or Row Layout Toggle:** User can switch between a visual card grid and a dense data row layout.
*   **Slide-In Panel Animation:** A smooth, non-disruptive transition for the detailed claim view.
*   **Pulsing Urgency Badge:** A subtle animation on overdue or high-priority claims.
*   **Color-Coded Firm Logos:** Helps visually differentiate claims from different sources at a glance.



--------------------


### **Widget #2**Messages**: Integrated Communication Hub**
*Corresponds to the **Messages** page in the sidebar navigation.*

**Purpose:**
To centralize all claim-related communications—emails, SMS messages, internal notes, and messages from firm portals—into a single, searchable, and trackable system. This eliminates the need for the IA to use personal devices, prevents information silos, and creates a complete, defensible record of every conversation for every claim.

**🔧 Core Features & Functionality:**
✅ **Unified Inbox**
A master inbox that aggregates all communications into a single, threaded view, similar to a modern email client. It can be filtered by: Claim ID, Source Firm, Contact (Policyholder, Vendor), Type (Email, SMS, Portal Message), or Status (Unread, Unreplied).

✅ **Firm-Specific Channels**
Messages originating from the Client & Carrier Portal are automatically organized into dedicated channels for each source firm, keeping those critical business communications separate and prioritized.

✅**ADD CONTACTS** ADD CONATACTS WITH ADVANCED DESCRIPTION, AND TGGING (FIRMS,POLICYHOLDER, VENDOR, OTHER)

✅ **Integrated Email & SMS & CALLING**
*   **Email:** Two-way sync with the user's Gmail or Outlook account. Emails sent or received are automatically parsed and linked to the correct claim file based on claim number or email address.
*   **SMS:** Provides a dedicated business phone number (via Twilio or similar service). The IA can send and receive SMS messages directly from the platform, keeping their personal number private. All text conversations are automatically logged.

✅ **Communication Templates**
A powerful template engine to eliminate repetitive typing.
*   **Create & Save:** The IA can create and save pre-written templates for common emails and SMS messages.
*   **Dynamic Merge Fields:** Use fields like `[Client Name]`, `[Claim ID]`, `[Appointment Time]`, `[My Name]` to personalize messages instantly.
*   **Categorization:** Organize templates into categories (e.g., "Initial Contact," "Appointment Reminders," "Document Request").

**🧠 Intelligent Features:**
**AI-Powered Response Suggestions:**
For common inquiries from firms or claimants ("When is my inspection?"), the `AI Assistant` can suggest a complete, context-aware response by pulling data from the Calendar and Claim file, ready to be sent with one click.

**Sentiment Analysis:**
The system automatically flags incoming messages with negative keywords or sentiment (e.g., "unhappy," "attorney," "complaint," "frustrated") for priority review, allowing the IA to address potential issues proactively.

**🎛️ Customization Options:**
*   The user can create custom email signatures.
*   The user can set up "out of office" auto-replies.
*   The user can organize templates into their own custom folders.

**🔐 Access & Permissions:**
All communications are private to the IA. Messages sent to external parties (claimants, firms) are logged, but no external party has access to the IA's central inbox.

**🤝 Integrations:**
*   **Claims:** Every communication is automatically logged in the correct claim's "Timeline." Clicking a message instantly shows the associated claim details.
*   **Calendar:** Powers automated SMS/email appointment reminders.
*   **Contractor & Vendor Hub:** Logs all communication with assigned vendors.
*   **Vault:** Attach any file from the Vault to outgoing emails. Incoming attachments can be saved directly to the correct claim folder.

**📱 Mobile Adaptability:**
*   A full-featured mobile inbox to manage all communications from the field.
*   Push notifications for new messages ensure timely responses.
*   Voice-to-text for composing messages and notes hands-free.

**🧩 Visual Layout Components:**
*   **Three-Pane Inbox Layout:** A familiar and efficient interface (Folders/Claims List | Message List | Detailed Message View).
*   **Conversation Threading:** All replies and forwards are grouped into a single, easy-to-follow conversation.
*   **Contact Profile Card:** Clicking a contact's name reveals a pop-up with their details and a history of recent communications.
*   **Status Indicators:** Clear visual cues for unread messages, messages awaiting reply, and messages that have been successfully sent.







---------------------


### Widget #3**Earnings**: Earnings Power Meter
**Purpose:**  
Provide real-time tracking of income performance against targets with predictive earnings forecasting.  

🔧 **Core Features & Functionality:**  
✅ YTD Earnings Tracker - Running total of collected payments  
✅ Projection Engine - Forecasts 30/60/90-day income based on pipeline  
✅ Fee Breakdown - Visualizes income by claim type, firm, and region  
✅ Goal Progress - Compares actual vs. target earnings  
✅ Collection Alerts - Flags overdue invoices over 45 days
✅ **Financial Overview Dashboard**
A high-level summary of the business's financial health, featuring interactive charts and key metric cards:
*   **Total Outstanding Revenue:** The total value of all sent but unpaid invoices.
*   **YTD Earnings & Profit:** A clear visualization of total revenue, total expenses, and net profit.
*   **Revenue by Source:** A pie or bar chart breaking down total earnings by each source firm, allowing the IA to instantly see which partnerships are most lucrative.
*   **Average Days to Pay:** A metric showing the average time it takes to get paid after submitting an invoice, filterable by firm.

✅ **Smart Invoice Generator**
*   **Fee Schedule Engine:** The IA can create and save the unique, often complex, fee schedules for different firms (e.g., percentage-based, time & expense, or tiered flat rates).
*   **Automated Invoice Creation:** A "Generate Invoice" button within a `Claim` file automatically applies the correct firm's fee schedule and pulls in all billable time and expenses logged for that claim.
*   **Invoice Status Tracking:** Each invoice has a clear status: Draft, Sent, Viewed (via portal), Paid, Partially Paid, or Overdue.

✅ **Time & Expense Logging**
A simple, accessible tool to capture every billable item.
*   **Time Entry:** A start/stop timer assignable to a claim, or manual entry of hours with descriptions.
*   **Expense Entry:** Fields for expense type (Mileage, Supplies, Lodging, Photos), amount, and the ability to upload a photo of the receipt directly from a mobile device.
*   **Mileage Auto-Import:** Automatically pulls total mileage from completed routes in the Route Planner to be added as a billable expense.

✅ **Payment Management**
A simple function to record full or partial payments against an invoice, with fields for date, method, and reference numbers. The system automatically updates the invoice status and dashboard metrics.  

**🧠 Intelligent Features:**
**Profitability Alerts:**
The system can flag claims where logged expenses are unusually high relative to the fee schedule, warning the IA of a potentially low-margin job before they even create the invoice.

**Payment Prediction:**
Based on a firm's payment history, the `AI Assistant` can provide an estimated payment date for newly submitted invoices, helping with cash flow forecasting.

**🎛️ Customization Options:**
*   The IA can customize the look of their invoices with their logo and business information.
*   The user can create custom categories for expenses.
*   Set up automated email reminders to be sent for invoices that become overdue.

**🔐 Access & Permissions:**
All financial data is strictly private to the IA. No firm or external party can see the IA's overall earnings or expenses.

**🤝 Integrations:**
*   **Claims:** Links all financial data directly to claims. Invoices are generated from the claim file.
*   **Firms:** Pulls fee schedule requirements and firm billing information.
*   **Route Planner:** Imports mileage for automated expense logging.
*   **Vault:** Securely stores a PDF copy of every generated invoice and all uploaded expense receipts.
*   **External Accounting Software:** One-click export of financial data in formats compatible with QuickBooks, Xero, etc.

**📱 Mobile Adaptability:**
*   **Quick Expense Entry:** The primary mobile feature is snapping a photo of a receipt and logging an expense on the go.
*   **Mobile Dashboard:** A simplified view of key financial KPIs.
*   View the status of any invoice.

**🧩 Visual Layout Components:**
*   **Professional Invoice Templates:** A selection of clean, professional templates.
*   **Interactive Charts:** The financial dashboard uses charts that can be clicked to drill down into more detailed data.
*   **Color-Coded Invoice List:** The list of all invoices is visually coded by status (Green for Paid, Yellow for Sent, Red for Overdue).
*   **"Unbilled Items" Badge:** A badge appears on claim files that have unbilled time or expenses, prompting the user to generate an invoice.




----------------------

### Widget #4**FIRMS**: Firm Relationship Matrix
**Purpose:**  
To serve as the central hub for discovering, connecting with, and managing relationships with the 150+ partnered firms in the Flex.IA ecosystem. This transforms the opaque and fragmented process of finding work into a transparent, streamlined, and proactive career management tool. 

🔧 **Core Features & Functionality:**  
✅ **ADD FIRM** - connect to ia firms via firm url login link with email password optional api etc 
✅ Firm Scorecards - Rates firms by payment speed, claim volume, and fee fairness  
✅ Connection Status - Shows onboarding progress for new firms  
✅ Opportunity Heatmap - Visualizes high-demand regions per firm  
✅ Communication Log - Last contact and response times  
✅ Preferred Firm Tagging - Star favorite partners  
✅ **Firm Directory**
A comprehensive, searchable, and filterable directory of all partnered firms, acting as a "LinkedIn for IAs."
*   **Smart Search:** Search by firm name, location, or keywords.
*   **Filter By:** Specialty (CAT, Daily, Commercial, Flood, etc.), States of Operation, Overall Rating (from other IAs), or "Accepting New Adjusters."

✅ **Detailed Firm Profiles**
Each firm has a rich profile page that provides all the information an IA needs to evaluate a potential partnership:
*   **Company Overview:** Description, website link, and primary contact info.
*   **Operational Details:** Typical claim types, average claim volume, and primary geographic service areas.
*   **Onboarding Requirements:** A clear checklist of required licenses, certifications, and background checks needed to work with them.
*   **Onboarding Documents:** A secure section to download the firm's standard documents like their Master Service Agreement (MSA), W-9, and adjuster guidelines.

✅ **Connection Management**
A clear, actionable system for managing the IA's professional network.
*   **Connection Status:** A clear indicator for each firm: `Connected` (approved to receive claims), `Pending Approval` (application submitted), or `Not Connected`.
*   **Apply to Network:** A simple, standardized application process to request a connection with a new firm, which pre-fills the IA's basic information.
*   **My Firms:** A personalized dashboard showing only the firms the IA is actively connected with, including a summary of work volume and earnings from each.

✅ **Compliance Sharing**
A powerful feature to accelerate onboarding. With one click from a firm's profile, the IA can share their verified license and certification status from the `Licensing & Compliance Tracker` directly with that firm's HR or deployment manager.


🧠 **Intelligent Features:**  
AI-Match Scoring - Recommends firms aligned with your expertise  
Relationship Health Index - Predicts at-risk partnerships
**Firm Matchmaker:**
The system proactively suggests firms the IA should connect with based on their Payouts, ratings, demand, claim demand, customer support, per diem, active licenses, location, and claim history. It might suggest, "Firms A, B, and C are actively deploying for hail in Texas and you have the required license. Would you like to apply?"

**Reputation System:**
A double-blind rating system where IAs can rate firms on factors like communication, payment speed, and fairness, and firms can rate IAs on professionalism and report quality. This helps both sides make better partnership decisions.
  

📊 **Insights & Reporting:**  
Identifies most profitable firms and growth opportunities  

🎛️ **Customization Options:**  
Weight scoring criteria based on personal priorities 
*   The IA can "favorite" or "watch" firms they are interested in, receiving notifications about new opportunities or changes in their status.
*   The IA can add private notes to each firm's profile (e.g., "Spoke with John Doe, deployment manager. Follow up in Q3."). 

🔐 **Access & Permissions:**  
Adjuster-specific data; admins see full firm network analytics
*   The IA's profile and application data are only shared with a firm when the IA explicitly applies or shares it.
*   Ratings and reviews are aggregated and anonymized to protect individual privacy.  

🤝 **Integrations:**  
Linked to Claims Feed, Earnings Tracker, and Messaging Hub
*   **Claims:** The source of all claim assignments from connected firms.
*   **Licensing & Compliance Tracker:** The source for the one-click compliance sharing feature.
*   **Earnings:** Provides the data for the "Earnings by Firm" summary on the "My Firms" dashboard.  

📱 **Mobile Adaptability:**  
Firm quick-view cards with contact shortcuts  
*   Browse and search the firm directory on the go.
*   Receive push notifications when a connection request is approved.
*   Quickly access a firm's contact information.

🧩 **Visual Layout Components:**  
Grid layout with firm logos, rating stars, and status indicators  
*   **Card-Based Directory:** Each firm is represented by a clean card with their logo, rating, and key specialties.
*   **Interactive Map View:** A map showing the headquarters or primary operational areas of all firms.
*   **Step-by-Step Application Wizard:** A guided process for applying to a new firm's network.
*   **Clear Status Labels:** Visually distinct labels for connection statuses make the dashboard easy to scan.







----------------------


### **WIDGET #6: Smart Scheduling & Routing**
*Corresponds to the **Calendar** page and the integrated **Route Planner** tool.*

**Purpose:**
To consolidate all time-sensitive activities into a single, intelligent calendar that manages inspections, client meetings, and follow-up tasks, and to plan the most efficient travel routes for daily inspections, saving hours on the road and maximizing productivity.

**🔧 Core Features & Functionality:**
✅ **Multi-View Visual Calendar**
A robust and familiar calendar interface with multiple views:
*   **Views:** Standard Month, Week, Day, and a task-focused Agenda view.
*   **Color-Coding:** Events are automatically color-coded by Firm, Event Type (Inspection, Desk Work, Personal), or Priority.
*   **Drag-and-Drop Rescheduling:** Easily move appointments to different times or days with animated snapping to time slots.

✅ **Smart Event Creation**
When creating an event, the modal is deeply integrated with the rest of the platform:
*   **Claim Linking:** Directly link the event to a specific claim file from the `Claims` hub.
*   **Automated Buffers:** Automatically block out travel time before and after field appointments by integrating with the Route Planner.

✅ **Interactive Route Planner**
*   **One-Click Optimization:** A smart algorithm that factors in real-time traffic, distance, and mandatory appointment windows to calculate the most time-efficient route for all of the day's scheduled inspections.
*   **Editable Route:** The user can manually override the optimized route by dragging and dropping stops.
*   **One-Click Navigation:** A "Start Navigation" button opens the turn-by-turn route to the next stop in the user's preferred mobile maps app.

✅ **Mileage Tracker & Reporting**
*   **Automatic Calculation:** Automatically calculates the mileage for the entire route and logs it.
*   **Expense Integration:** The total mileage for a completed route can be pushed to the `Earnings` page as a billable expense with a single click.

**🧠 Intelligent Features:**
**Optimal Scheduling Suggestion:**
When scheduling a new inspection, the `AI Assistant` can analyze the existing schedule and the location of other appointments and suggest the most efficient time slot to minimize travel.

**Dynamic Rerouting:**
If the IA is running behind schedule, the system can suggest re-optimizing the rest of the day's route from their current location to minimize further delays.

**🎛️ Customization Options:**
*   The user can set their default working hours, navigation app, and a default start/end location (home).
*   Set multiple, customizable reminders per event via push notification, email, or SMS.

**🔐 Access & Permissions:**
The calendar and route plans are private to the IA. While event data is linked to claims, the source firms cannot see the IA's full personal schedule.

**🤝 Integrations:**
*   **Claims:** Pulls deadlines and allows events to be linked to claims.
*   **Earnings:** Pushes logged mileage data for expense tracking.
*   **Messages:** Powers automated SMS/email appointment reminders.
*   **External Calendars:** Seamless, two-way sync with Google Calendar, Outlook, and Apple Calendar.

**📱 Mobile Adaptability:**
*   A fully functional mobile calendar and route planner.
*   Receive and interact with event reminders and notifications.
*   One-tap access to start navigation to the next appointment's address.

**🧩 Visual Layout Components:**
*   **Clean, Modern Interface:** A familiar calendar UI and a two-panel route planner (map + list).
*   **Availability Highlighting:** The calendar view grays out unavailable times, showing clear open slots.
*   **Animated Route Drawing:** When a route is optimized, an animated line smoothly connects the pins.
*   **Daily Route Summary Panel:** A persistent panel showing: Total Estimated Travel Time, Total Miles, and Final ETA.

---

### **WIDGET #7**Analytics**: Analytics Performance Dashboard**
*Corresponds to the **Analytics** page in the sidebar navigation.*

**Purpose:**
To provide a high-level, data-driven "30,000-foot view" of the entire claims operation. This module aggregates data from all other modules to visualize Key Performance Indicators (KPIs), identify trends, uncover bottlenecks, and empower the IA to make strategic, informed decisions to grow their business.

**🔧 Core Features & Functionality:**
*   **Scorecards:** Large, at-a-glance numbers for critical KPIs.
*   **Line & Bar Charts:** For tracking trends over time.
*   **Pie & Donut Charts:** For showing composition.
*   **Geographic Heat Maps:** For visualizing claim density or value by zip code.

✅ **Performance Analytics**
Focuses on personal productivity and efficiency, pulling data from the `Claims` and `Calendar` modules.
*   **Personal Scorecard:** Tracks metrics like Average Claim Cycle Time (from assignment to submission), On-Time Submission Rate, Claims Handled/Closed per Period, and Average Communications Response Time.
*   **Time Allocation Analysis:** A chart showing how time is spent (e.g., Field Inspections, Report Writing, Travel, Admin).

✅ **Financial Analytics**
Aggregates data from the `Earnings` module to provide a clear picture of business health.
*   **Revenue Dashboard:** Visualizes Total Billed vs. Total Collected, Outstanding Revenue, and Average Days to Pay.
*   **Profitability Analysis:** Breaks down profitability by Claim Type, Carrier, or even by geographic region.

✅ **Firm Performance Comparison**
A powerful tool to analyze and compare key metrics across different source firms, answering critical questions:
*   Which firm provides the highest average fee per claim?
*   Which firm pays invoices the fastest?
*   Which firm has the highest claim volume in my area?

✅ **Report Generation & Scheduling**
A powerful engine to export insights from the dashboard.
*   **One-Click Exports:** Export any dashboard view or individual panel as a high-quality PDF or raw CSV/Excel file.
*   **Scheduled Reports:** Automate the delivery of a "Weekly Performance Summary" or "Monthly Financial Overview" via email.

**🧠 Intelligent Features:**
**AI-Powered Anomaly Detection:**
The `AI Assistant` proactively monitors data streams and flags significant deviations from the norm, e.g., "Your cycle time for Firm X has increased 20% this quarter," or "Your fuel expenses are trending 15% higher than last month."

**Predictive Forecasting:**
Uses historical data to generate simple forecasts for future claim volume or revenue, aiding in income planning and goal setting.

**🎛️ Customization Options:**
*
*   A master filter bar allows all data on the dashboard to be filtered by Date Range, Source Firm, or Claim Type.
*   Set custom goals and thresholds for KPIs, which will change colors on the dashboard when targets are met or missed.

**🔐 Access & Permissions:**
This data is entirely private to the IA. It is their personal business intelligence tool.

**🤝 Integrations:**
This module is a "read-only" aggregator, pulling data from:
*   **Claims:** For all claim status, type, and volume data.
*   **Earnings:** For all revenue, expense, and payment data.
*   **Calendar & Route Planner:** For data on inspections completed and mileage.
*   **Firms:** For comparing performance across different firms.

**📱 Mobile Adaptability:**
*   A simplified, non-customizable "Mobile Dashboard" that displays a curated set of the most critical KPIs for quick review on the go.
*   Receive scheduled PDF reports directly on a mobile device.

**🧩 Visual Layout Components:**
*   **Modular Grid System:** Allows for the flexible arrangement of dashboard panels.
*   **Interactive Charts:** All charts are interactive; hovering reveals detailed data points, and clicking a segment can "drill down" or filter the entire dashboard.
*   **Data Tables:** For presenting detailed, granular information.
*   **Clear Title & Description** on each panel, explaining what the data represents.

---

### **WIDGET** #8: Secure Document Vault**
*Corresponds to the **Vault** page in the sidebar navigation.*

**Purpose:**
To eliminate file chaos by providing a single, secure, and intelligent cloud-based repository for all claim-related documents. It ensures every photo, video, report, and estimate is automatically organized, linked to the correct claim and source firm, and instantly searchable, creating a bulletproof record for every job.

**🔧 Core Features & Functionality:**
✅ **Unified & Claim-Centric Structure**
*   **Global Library:** A top-level view of all files across all claims, with powerful search capabilities.
*   **Claim-Specific Folders:** Within each claim file in the `Claims` hub, there is a dedicated document library showing only the files for that claim.
*   **Automated Folder Templates:** When a new claim is created, the system automatically generates a standard, customizable folder structure (e.g., Photos, Videos, Estimates, Reports, Signed Forms, Correspondence) to ensure consistency.

✅ **Robust Uploading Capabilities**
*   **Drag-and-Drop:** Move files and entire folders from the desktop directly into the browser.
*   **Mobile Upload:** Directly upload photos and videos from a phone's camera or gallery while on-site. This is a critical field feature.
*   **Email-to-Upload:** Each claim is assigned a unique, private email address. Forwarding an email with attachments to this address automatically files them in that claim's "Correspondence" folder.

✅ **Intelligent File Processing (AI-Powered)**
*   **Optical Character Recognition (OCR):** All uploaded PDFs and images are scanned, making their text content fully searchable. Find a specific phrase inside a 100-page engineering report instantly.
*   **AI-Powered Auto-Tagging:** The system analyzes files to suggest tags (e.g., a PDF from Xactimate is tagged "Estimate"). Photos can be auto-tagged with keywords recognized in the image (`water damage`, `hail`, `siding`, `roof`, `kitchen`).

✅ **Version Control & Security**
*   **File Versioning:** When a file with the same name is uploaded (e.g., a revised estimate), it stacks as a new version instead of overwriting the original, preserving a full history that can be reviewed or restored.
*   **Secure Sharing:** Generate secure, time-limited, and password-protected links to share specific files or folders with third parties (contractors, attorneys, insureds) without giving them full system access. Set permissions for `View-Only` or `Download`.

**🧠 Intelligent Features:**
**Document Analyzer:**
The `AI Assistant` can scan an uploaded document (like a carrier's guidelines) and provide a quick summary of key points, such as required photo types or specific forms needed.

**Missing Document Alert:**
Based on a claim's checklist or a firm's requirements, the system can flag if a critical document (like a signed proof of loss) has not yet been uploaded as the claim nears its deadline.

**🎛️ Customization Options:**
*   The user can create their own custom folder structures to be used as templates for new claims.
*   The user can create a custom tagging system for organizing files.
*   Set storage limit alerts.

**🔐 Access & Permissions:**
*   All files are private to the IA by default.
*   Files can be explicitly shared via the `Client & Carrier Portal` or through secure links.
*   A detailed audit log tracks every file upload, view, download, and share action.

**🤝 Integrations:**
*   **Claims:** The Vault is the core file system for every claim, accessible via the "Documents" tab.
*   **Report Builder:** Pulls photos and documents from the Vault and saves the final exported PDF back into the correct claim folder.
*   **Client & Carrier Portal:** The IA can publish documents from the Vault directly to the portal for firm access.
*   **e-Signature Platforms (DocuSign, etc.):** Send a document for signature, and the executed copy is automatically returned to the correct claim folder in the Vault.

**📱 Mobile Adaptability:**
*   **Full Mobile Access:** Browse, search, and view any file from the Vault on a mobile device.
*   **Optimized Uploader:** The mobile upload process is streamlined for field use, allowing for rapid photo and video uploads.
*   **Offline Access:** Mark specific critical documents (like carrier guidelines) for offline access before heading to an area with poor service.

**🧩 Visual Layout Components:**
*   **Rich Previews:** In-browser thumbnail and full-size previews for common file types (PDF, JPG, PNG, MP4) so users don't have to download to view.
*   **Bulk Actions:** A clean interface to select multiple files to Download (as .zip), Tag, Move, or Share.
*   **Intuitive Folder Navigation:** A familiar folder tree structure on the side panel for easy navigation.
*   **Upload Progress Indicators:** Clear visual feedback on the status of large file uploads.

---


---

### ****WIDGET** #10: AI Assistant**
*Corresponds to the **AI Assistant** in the sidebar navigation.*

**Purpose:**
To provide a conversational, intelligent assistant embedded within the platform that can understand natural language commands to answer questions, perform tasks, summarize information, and automate workflows, acting as a powerful productivity multiplier for the Independent Adjuster.

**🔧 Core Features & Functionality:**
✅ **Conversational Interface**
A persistent chat interface, accessible from the bottom of the sidebar. The user can type or speak natural language commands at any time, from any page in the application.

✅ **Information Retrieval & Navigation**
Answer questions by querying platform data in real-time:
*   "What are my most urgent claims?"
*   "Show me all open claims for Firm X in Texas."
*   "What is the phone number for the insured on claim #6543?"
*   "Navigate me to the Earnings page."
*   "Find the final report for claim #1234."

✅ **Task Execution & Automation**
Perform actions within the platform based on commands:
*   "Draft an initial contact email to the insured for claim #6543 using the 'Initial Contact' template."
*   "Schedule a follow-up task for tomorrow at 10 AM to review the engineer's report."
*   "Add a note to claim #1234 saying 'Spoke with contractor, materials are on backorder.'"
*   "Start a new route plan for all my inspections scheduled for tomorrow."

✅ **Content Generation & Summarization**
Leverage generative AI to assist with content creation:
*   **Narrative Assistance:** "Summarize these facts into a professional narrative: Insured reported roof leak on May 10. Inspection on May 12 confirmed hail damage to south slope. 15 hits per square."
*   **Document Summarization:** "Summarize the attached 50-page engineering report into five key bullet points."
*   **Communication Drafting:** "Draft a polite but firm email to the contractor on claim #555 asking for an updated timeline."

**🧠 Intelligent Features:**
The entire module is an intelligent feature. It uses Large Language Models (LLMs) to understand user intent and interact with the Flex.IA platform's internal APIs. It maintains conversation context to allow for follow-up questions.

**🎛️ Customization Options:**
*   The user can set a "personality" or "tone" for the AI's responses (e.g., Formal, Casual, Concise).
*   The user can create custom shortcuts or aliases for frequent commands.

**🔐 Access & Permissions:**
The AI Assistant operates strictly within the permissions of the logged-in user. It cannot access or perform actions on data the user is not authorized to see. All interactions can be logged for review.

**🤝 Integrations:**
The AI Assistant is the ultimate integration, with the ability to read from and write to nearly every other module in the platform:
*   **Claims:** To retrieve claim data and add notes.
*   **Calendar:** To schedule events and tasks.
*   **Messages:** To draft and send messages.
*   **Vault:** To find and summarize documents.
*   **Route Planner:** To initiate route plans.

**📱 Mobile Adaptability:**
*   The AI Assistant is fully accessible on mobile, with a prominent microphone icon to encourage voice commands, making it a true hands-free assistant in the field.

**🧩 Visual Layout Components:**
*   **Clean Chat Interface:** A familiar chat bubble layout.
*   **"Thinking" Indicators:** Animations to show when the AI is processing a request.
*   **Actionable Buttons:** When the AI suggests an action (e.g., "Shall I send this email?"), it provides "Yes/No" buttons to complete the task.
*   **Source Linking:** When providing information, the AI includes a direct link to the source data (e.g., the claim file or document) for verification.

---

### ****WIDGET** #11: Contractor & Vendor Hub**
*This is a core database, likely accessed from the **Claims** page or a dedicated link.*

**Purpose:**
To create and manage a centralized, private, and vetted database of all third-party contractors and vendors (e.g., roofers, mitigation companies, plumbers, engineers). This hub streamlines finding, assigning, and tracking the performance of reliable partners for any given claim, turning a messy spreadsheet into a powerful relationship management tool.

**🔧 Core Features & Functionality:**
✅ **Searchable Vendor Directory**
A comprehensive list of all vendors the IA works with, viewable as a list or on an interactive map.
*   **Smart Search & Filtering:** Instantly find vendors by: Trade/Specialty (Roofing, Water Mitigation, etc.), Service Area (City, Zip Code, or Radius from a claim address), Internal Rating, or Custom Tags (`Preferred`, `24/7 Emergency`, `CAT Team`).

✅ **Comprehensive Vendor Profiles**
Each vendor has a detailed profile page acting as a single source of truth:
*   **Contact Information:** Company name, key contacts, phone numbers, and email addresses.
*   **Credentials & Compliance:** Fields to upload and track status/expiration dates for: Business Licenses, General Liability Insurance, and Worker's Comp Insurance.
*   **Internal Ratings & Notes:** A private 5-star rating system and a notes section visible only to the IA to log performance feedback ("Great communication," "Slow on invoicing," etc.).
*   **Associated Claims History:** A tab listing all past and current claims the vendor has been assigned to within the platform.

✅ **Job Assignment & Tracking**
*   **"Find Vendors Near Claim" Button:** From a claim file in the `Claims` hub, one click opens the Vendor Hub map, centered on the claim's address, showing all nearby, qualified vendors from the IA's private list.
*   **"Assign to Claim" Action:** A button on a vendor's profile to formally link them to a specific claim, which logs the assignment in the claim's timeline.

**🧠 Intelligent Features:**
**Credential Expiration Alerts:**
The system automatically sends a notification to the IA when a vendor's insurance or license is about to expire, preventing the IA from assigning work to a non-compliant partner.

**Performance-Based Suggestions:**
When searching for a vendor, the system can prioritize and highlight those with the highest internal ratings or those who have successfully completed similar jobs in the past.

**🎛️ Customization Options:**
*   The IA can create custom fields for vendor profiles (e.g., "Primary Contact Person," "Billing Email").
*   The IA can define their own custom tags to categorize vendors based on their unique workflow.

**🔐 Access & Permissions:**
This entire hub is a private database for the IA. No vendor or firm can see the IA's list, notes, or ratings.

**🤝 Integrations:**
*   **Claims:** The primary point of integration. Assign vendors to claims and view assigned vendors from the claim file.
*   **Messages:** Logs all calls and messages sent to vendors through the platform.
*   **Vault:** Stores all uploaded vendor credential documents (licenses, insurance certificates).
*   **Route Planner:** Allows the IA to get turn-by-turn directions to a vendor's office or a specific job site.

**📱 Mobile Adaptability:**
*   **Quick Vendor Search:** Find and call a vendor directly from the mobile app.
*   **On-the-Fly Addition:** Quickly add a new vendor's contact information to the hub after meeting them in the field.
*   View a vendor's details and past claim history.

**🧩 Visual Layout Components:**
*   **Map-Based Search:** The visual map for finding local vendors is an intuitive discovery tool.
*   **Credential Status Badges:** Clear visual tags next to a vendor's name indicating their compliance status (`Verified`, `Insurance Expiring Soon`, `COI Expired`).
*   **Star Ratings:** An at-a-glance visual cue for internal performance ratings in the main directory view.
*   **Quick Add Vendor Form:** A streamlined modal to quickly add a new vendor to the database.

---














---

### ****WIDGET** #13: Licensing & Compliance Tracker**
*This is a critical tool, likely found within the **Settings** or a dedicated top-level page.*

**Purpose:**
To solve a critical business problem for Independent Adjusters by centralizing the management of all state licenses, certifications, and continuing education (CE) credits. This module ensures an adjuster is always compliant, deployment-ready for the entire firm network, and never risks losing work due to an expired license.

**🔧 Core Features & Functionality:**
✅ **License Dashboard**
A master dashboard showing every license and certification held by the IA. Each entry displays:
*   **State/Jurisdiction** and License Type (e.g., All-Lines, P&C, CAT).
*   **License Number** and a scanned copy of the license.
*   **Status:** A clear, color-coded badge (`Active`, `Expiring Soon`, `Expired`, `Inactive`).
*   **Expiration Date** with a live countdown timer.

✅ **Continuing Education (CE) Tracker**
For each state license, a dedicated tracker shows:
*   **Total CE Hours Required** per renewal period.
*   **Breakdown of required hours** by topic (e.g., Ethics, Law & Policy).
*   **A running tally of CE Hours Completed**, with uploaded certificates for each course.
*   **A visual progress bar** showing completion status toward the renewal requirement.

✅ **Certificate & Document Vault**
A secure, dedicated area within the `Vault` to upload, store, and view all compliance-related documents, such as state licenses, CE course completion certificates, and industry certifications (e.g., HAAG, IICRC).

✅ **Compliance Sharing with Firms**
A key feature allowing the IA to grant specific firms in the `Firms` network view-only access to their verified compliance status. This drastically speeds up onboarding and deployment verification, as the firm can see up-to-date license info without back-and-forth emails.

**🧠 Intelligent Features:**
**Automated Renewal Alerts:**
The system automatically sends email and push notifications to the IA 90, 60, and 30 days before a license or certification is set to expire, providing ample time for renewal.

**CE Gap Analysis:**
The system proactively highlights any gaps between required CE credits and completed credits, showing the IA exactly what courses they still need to take for each state. It can even suggest accredited online course providers.

**🎛️ Customization Options:**
*   **Custom Certifications:** Ability to add and track non-standard or firm-specific certifications alongside state licenses.
*   **Custom Reminders:** Users can set their own custom reminder intervals in addition to the system defaults.

**🔐 Access & Permissions:**
This data is highly personal and secure. It is only visible to the IA, unless they explicitly grant view-only access to a connected firm.

**🤝 Integrations:**
*   **Calendar:** Automatically adds license expiration dates and renewal deadlines to the user's main calendar.
*   **Vault:** Leverages the core storage infrastructure to securely house all uploaded certificates and license copies.
*   **Earnings:** Can feed CE course costs into the expense tracking module.
*   **Firms:** The primary integration point for sharing compliance status with carriers.

**📱 Mobile Adaptability:**
*   A "digital wallet" view on mobile that allows the IA to quickly pull up a digital copy of any license or certification while in the field or at a deployment check-in.
*   Receive renewal alert push notifications.

**🧩 Visual Layout Components:**
*   **Color-Coded Status Badges:** Green for `Active`, Yellow for `Expiring Soon`, Red for `Expired`, making the dashboard instantly scannable.
*   **Progress Bars:** Clear, visual representation of CE credit completion.
*   **Timeline View:** A chronological timeline showing all upcoming renewal dates across all licenses, helping the IA plan their CE schedule for the year.
*   **Secure Document Viewer:** A built-in viewer for PDFs and image files of licenses and certificates.

---

### ****WIDGET** #14: Report Builder & Exporter**
*This is a core tool, likely accessed from within a specific claim in the **Claims** hub.*

**Purpose:**
To empower the IA to rapidly create, customize, and export professional, carrier-ready reports directly from claim data. This module transforms the tedious, manual process of report writing into a streamlined, template-driven workflow, ensuring consistency, accuracy, and significant time savings on every file.

**🔧 Core Features & Functionality:**
✅ **Template-Driven Report Generation**
A library of pre-built and customizable report templates tailored to the needs of different firms and claim types:
*   **Standard Templates:** First Contact / Initial Report, Full Inspection Report, Status Update Report, Final / Closing Report.
*   **Firm-Specific Templates:** The IA can create and save report templates that match the exact format required by a specific carrier in their `Firms` network.

✅ **Drag-and-Drop Report Canvas**
An intuitive, "what you see is what you get" (WYSIWYG) editor where IAs can build or modify report templates.
*   **Data Blocks:** Users can drag and drop different data "blocks" onto the canvas, such as: Claim Information Block, Photo Log Block, Estimate Summary Block, Narrative/Notes Block, and Document Attachment Block.
*   **Layout Control:** Adjust margins, add page breaks, and insert headers/footers with branding.

✅ **Smart Data Integration**
When a report is generated for a specific claim, the system automatically populates all data blocks with the correct information from the other modules, eliminating manual data entry.
*   **Claim Info:** Pulled from the `Claims` hub.
*   **Photos:** Pulled from the `Vault`, with options to select specific photos or albums.
*   **Notes:** Pulled from the claim's timeline and notes section.
*   **Estimate Data:** Can pull summary data from imported Xactimate/Simsol files or from the `Earnings` module.

✅ **Photo Management & Annotation**
A dedicated photo selection interface within the report builder, designed for adjusters.
*   **Select & Order:** Choose which photos to include and drag them into the desired sequence.
*   **Captioning & Layout:** Add captions to each photo directly within the report and choose layouts (e.g., 2, 4, or 6 photos per page).
*   **Simple Annotation:** Basic tools to draw arrows, circles, or add text overlays to photos to highlight specific damage, all within the builder.

✅ **Professional Export Options**
Generate the final report in multiple formats with one click:
*   **PDF:** The primary format, professionally branded with the IA's business logo and contact information.
*   **Word (.docx):** For cases where the carrier requires an editable format for their internal systems.

**🧠 Intelligent Features:**
**AI-Powered Narrative Assistant:**
An AI assistant (powered by the core `AI Assistant`) embedded in the narrative block that can help adjusters write or refine their reports. It can summarize facts into a coherent paragraph, check for grammar and tone, and expand on bullet points to create a professional narrative.

**Template Suggestions:**
The system can recommend the most appropriate report template based on the claim's current status or the requirements of the source firm.

**🎛️ Customization Options:**
*   **Branding & Layout:** The IA can set up a master template with their company logo, header, footer, and font styles to ensure all reports have a consistent, professional look.
*   **Custom Data Blocks:** Ability to create custom text or data blocks for unique information required by specific carriers.

**🔐 Access & Permissions:**
*   The IA can create, edit, and export reports for their assigned claims.
*   Report templates can be saved privately.

**🤝 Integrations:**
*   **Vault:** This is the core integration. The Report Builder pulls photos and documents from the Vault and saves the final exported PDF back into the correct claim folder.
*   **Claims:** Pulls all core claim data, notes, and contact information.
*   **Earnings:** Can pull estimate summary data to include in reports.
*   **Client & Carrier Portal:** Generated reports can be published directly to the portal for client access with a single click.

**📱 Mobile Adaptability:**
*   While full report building is best suited for desktop, the mobile app allows for:
*   **Quick Report Generation:** Generate a report using a default template with one tap (e.g., a simple photo report).
*   **Report Viewing:** View any previously generated PDF report on a mobile device.

**🧩 Visual Layout Components:**
*   **Two-Panel Interface:** A clean layout with the list of available data blocks and report elements on the left and the live report canvas on the right.
*   **Live Preview:** The report canvas shows a real-time preview of what the final exported document will look like.
*   **Branded PDF Templates:** The final output is polished and professional, not a simple data dump.
*   **Photo Tray:** A visual tray at the bottom of the screen shows all available photos for the claim, which can be dragged directly into the report.

---

### ****WIDGET** #15: CAT Event Management Dashboard**
*This is a specialized view, likely accessed from the **Dashboard** or **Claims** page.*

**Purpose:**
To provide a dedicated command center for a solo Independent Adjuster to manage their response to a large-scale Catastrophic (CAT) event. This module enables the IA to group all related storm claims, visualize the geographic concentration of their workload, track event-specific performance, and streamline the unique demands of a CAT deployment.

**🔧 Core Features & Functionality:**
✅ **CAT Event Creator**
A simple tool to formally define and group claims for a new CAT event:
*   **Event Name:** (e.g., "My Hurricane Ian Claims," "Texas Hailstorm - May 2024").
*   **Date Range:** The start and end dates of the deployment.
*   **Geographic Zone:** Define the primary affected area by drawing a polygon on a map or listing key zip codes. This helps auto-tag incoming claims.

✅ **Event-Specific Claims Dashboard**
A filtered view of the main `Claims` hub, showing *only* the claims that have been tagged to a specific CAT event. This provides a focused workspace, free from the distraction of daily claims. All standard filtering and sorting tools are available within this view.

✅ **Geographic Workload Heatmap**
An interactive map displaying all claims assigned within the active CAT event.
*   **Claim Density View:** Pins are clustered into a heatmap, showing the geographic concentration of the workload. This helps visualize the scope of the event and plan broad-level routing strategies.
*   **Pin Details:** Clicking on a pin or cluster reveals key claim information and allows for quick actions.

✅ **Event Performance & Financial Tracker**
A dedicated analytics panel that summarizes performance *only for the active CAT event*:
*   **Event Scorecard:** Shows key metrics like Total Claims Assigned, Inspections Completed, Reports Submitted, and Claims Closed for this event.
*   **Event Financials:** Tracks Total Billed Revenue and Total Logged Expenses (mileage, lodging, supplies) specifically for the deployment, providing a clear view of the event's profitability.

✅ **CAT Document Hub**
A centralized folder within the `Vault` dedicated to the CAT event. This is a place to store non-claim-specific documents essential for the deployment, such as state-issued emergency licensing documents, carrier-specific guidelines for the storm, or local maps.

**🧠 Intelligent Features:**
**Auto-Tagging Engine:**
When a new claim is assigned from any firm, the system checks if its property address falls within the defined geographic zone of an active CAT event and automatically suggests tagging it to that event, streamlining intake.

**Profitability Calculator:**
The Event Financial Tracker can provide a real-time "Profit Per Claim" metric for the CAT event, helping the IA understand if their fee schedule and expense management are effective for that deployment.

**🎛️ Customization Options:**
*   **Map Overlays:** Ability to overlay weather radar maps (like hail swaths or hurricane paths) from public sources onto the claim heatmap for better context and damage assessment.
*   **Custom Event Statuses:** The IA can define custom statuses for the event itself, such as `Pre-Deployment`, `Active`, `Wrapping Up`, and `Closed`.

**🔐 Access & Permissions:**
This entire module and all its data are private to the individual IA. It is a personal tool for organizing and optimizing their own work during a high-pressure event.

**🤝 Integrations:**
*   **Claims:** The CAT dashboard is essentially a powerful, pre-filtered "view" of this core module.
*   **Route Planner:** The heatmap provides a high-level strategic view that informs daily route planning.
*   **Earnings:** Feeds all revenue and expense data into the event-specific financial tracker.
*   **Vault:** Provides the storage backbone for the CAT Document Hub.

**📱 Mobile Adaptability:**
The mobile view is critical for a deployed IA.
*   Quickly view the claim heatmap to understand the day's geographic focus.
*   Easily tag a new incoming claim to the active CAT event.
*   Access documents from the CAT Document Hub (e.g., emergency license) on the fly.

**🧩 Visual Layout Components:**
*   **Tabbed Event Interface:** Easily switch between different active or past CAT events.
*   **Interactive Map Panel:** The heatmap is the central, most prominent visual element of the dashboard.
*   **Summary Cards:** Key metrics are displayed in large, easy-to-read cards at the top of the dashboard.
*   **Event Progress Bar:** A visual bar showing the percentage of claims closed for the event.

---


---

### ****WIDGET** #17: Knowledge Base & Training Center**
*This is a support tool, likely accessed via a "Help" icon or a dedicated link in the sidebar.*

**Purpose:**
To provide a built-in learning hub where the IA can access tutorials on how to use Flex.IA, read industry best practices, and stay up-to-date on new platform features. This empowers users to become self-sufficient, maximize the platform's value, and continuously improve their skills.

**🔧 Core Features & Functionality:**
✅ **Searchable Article Library**
A comprehensive, well-organized library of articles, guides, and FAQs covering every feature of the platform.
*   **Full-Text Search:** A powerful search bar that instantly finds relevant articles.
*   **Categorization:** Articles are organized into logical categories like `Getting Started`, `Managing Claims`, `Billing & Invoicing`, and `Advanced Features`.

✅ **Video Tutorials**
A collection of short, professionally produced screen-recorded videos demonstrating key workflows.
*   **Bite-Sized Content:** Videos are typically 2-5 minutes long, focusing on a single task (e.g., "How to Create an Invoice," "Optimizing Your First Route").
*   **Transcripts & Chapters:** Each video includes a searchable transcript and chapter markers for easy navigation.

✅CONTINUEING EDUCATION 

✅ **"What's New" Section**
A regularly updated section, often with a notification badge, highlighting the latest feature releases, platform updates, and bug fixes. This keeps the user informed and engaged with the platform's evolution.

✅ **Best Practices & Industry Insights**
A section containing articles and guides that go beyond the software itself, offering value-added content for the IA's business.
*   **Topics:** "Tips for a Successful CAT Deployment," "Understanding Different Carrier Guidelines," "Tax Best Practices for IAs."

**🧠 Intelligent Features:**
**Contextual Help:**
A "Help" button within any module or page can automatically suggest relevant articles or videos from the Knowledge Base. For example, clicking "Help" on the `Route Planner` page would bring up articles about route optimization.

**AI-Powered Search:**
The search function is powered by the `AI Assistant`, allowing users to ask natural language questions (e.g., "How do I add my logo to an invoice?") and get direct answers with links to the full articles.

**🎛️ Customization Options:**
*   Users can "bookmark" or "favorite" articles they find particularly helpful for quick access later.
*   Users can provide feedback or ratings on articles to help the Flex.IA team improve the content.

**🔐 Access & Permissions:**
This content is public to all authenticated Flex.IA users.

**🤝 Integrations:**
*   **AI Assistant:** The primary integration, using the Knowledge Base as its source of truth for answering "how-to" questions.
*   **Platform-wide:** The contextual help feature links all other modules to this knowledge base.

**📱 Mobile Adaptability:**
*   The entire Knowledge Base is fully responsive and readable on a mobile device.
*   Videos are optimized for mobile playback.
*   This allows an IA to quickly look up how to perform a task while in the field.

**🧩 Visual Layout Components:**
*   **Clean, Readable Layout:** Focus on typography and white space to make articles easy to read.
*   **Embedded Media:** Seamlessly embeds videos and images within articles.
*   **"Was this helpful?" Feedback Widget:** A simple thumbs-up/down widget at the end of each article.
*   **Breadcrumb Navigation:** Helps users understand where they are within the knowledge base hierarchy.

---

### ****WIDGET** #18: Performance Goals & Gamification**
*This is a personal development tool, likely found within the **Analytics** or **Dashboard** pages.*

**Purpose:**
To help the Independent Adjuster stay motivated and focused on business growth by allowing them to set, track, and visualize progress toward personal business goals. It turns the grind of daily work into an engaging, game-like experience of continuous improvement.

**🔧 Core Features & Functionality:**
✅ **Goal Setting Module**
A flexible interface for setting specific, measurable, achievable, relevant, and time-bound (SMART) goals for various timeframes (monthly, quarterly, yearly).
*   **Goal Types:** The user can set goals based on any key metric tracked in the platform, such as:
    *   `Target Earnings` (e.g., "$15,000 in a month").
    *   `Number of Claims Closed` (e.g., "Close 50 claims this quarter").
    *   `Reduce Average Cycle Time` (e.g., "Lower my average cycle time to 5 days").
    *   `Connect with New Firms` (e.g., "Connect with 3 new CAT firms this year").

✅ **Progress Visualization**
A dedicated dashboard that provides a clear, visual representation of progress toward each goal.
*   **Progress Bars & Gauges:** Simple, intuitive visuals showing how close the user is to achieving a goal.
*   **Pacing Indicator:** A visual cue that shows if the user is "on track," "ahead," or "behind" pace to meet their time-based goals.
*   **Historical Performance:** Charts showing performance against the same goal in previous periods.

✅ **Achievement Badges & Milestones**
An automated system that awards virtual badges for reaching significant milestones, providing positive reinforcement.
*   **Examples:** "First $10k Month," "100 Claims Closed," "5-Star Firm Rating," "CAT Veteran" (for closing claims in 5+ CAT events), "Road Warrior" (for driving 10,000+ miles).

**🧠 Intelligent Features:**
**Goal Suggestion Engine:**
Based on the IA's historical performance data from the `Analytics` module, the system can suggest realistic and challenging next goals. For example, "You closed 40 claims last quarter. Suggest setting a goal of 45 for this quarter?"

**Motivational Nudges:**
The system can send encouraging push notifications, like "You're only 5 claims away from your monthly goal!" or "You've just surpassed last month's earnings!"

**🎛️ Customization Options:**
*   The user has full control over which goals they set and can edit or delete them at any time.
*   The user can choose which achievement badges are displayed on their public profile (if a community feature exists).

**🔐 Access & Permissions:**
All goal-setting and progress data is completely private to the individual IA.

**🤝 Integrations:**
*   **Analytics:** The core integration, providing all the raw data needed to track progress against goals.
*   **Earnings:** Feeds data for all revenue-based goals.
*   **Claims:** Provides data for claim volume and cycle time goals.
*   **Firms:** Tracks progress for goals related to connecting with new firms.

**📱 Mobile Adaptability:**
*   A simplified mobile dashboard showing progress on key active goals.
*   Receive push notifications for milestone achievements and motivational nudges.

**🧩 Visual Layout Components:**
*   **Vibrant, Engaging UI:** Uses color, animations, and modern design to make tracking goals feel rewarding.
*   **"Trophy Case" or "Achievements" Page:** A dedicated page to display all earned badges.
*   **Confetti/Celebration Animations:** A small, delightful animation that plays when a goal is completed or a badge is earned.
*   **Personalized Dashboards:** The user can choose which goal-tracking widgets appear on their main `Dashboard`.

---

### ****WIDGET** #19: Legal & Contract Repository**
*This is a specialized section within the **Vault** or **Firms** page.*

**Purpose:**
To provide a secure, centralized, and intelligent location for the Independent Adjuster to store, manage, and understand all legal agreements and contracts with their partnered firms, mitigating risk and ensuring clarity on all business relationships.

**🔧 Core Features & Functionality:**
✅ **Secure Contract Vault**
A dedicated, firewalled section within the `Vault` specifically for uploading, storing, and categorizing sensitive legal documents.

✅ **Contract Profiles**
Each uploaded contract is more than just a file; it's a profile with structured metadata:
*   **Associated Firm:** Linked directly to a profile in the `Firms` network.
*   **Contract Type:** Categorized as `Master Service Agreement (MSA)`, `Non-Disclosure Agreement (NDA)`, `Statement of Work (SOW)`, etc.
*   **Key Dates:** Fields for `Effective Date`, `Expiration Date`, and `Notice Period for Termination`.
*   **Status:** `Active`, `Expired`, `Superseded`.

✅ **Renewal & Expiration Management**
*   **Automated Reminders:** The system automatically creates calendar events and sends notifications when a contract is approaching its expiration or renewal date, preventing unintended lapses in agreements.
*   **Version Control:** When a new version of a contract is signed (e.g., an annual update to an MSA), it can be uploaded and linked to the previous version, maintaining a clear historical record.

**🧠 Intelligent Features:**
**AI-Powered Contract Analysis:**
The IA can use the `AI Assistant` to scan an uploaded contract and summarize key, often complex, clauses in plain language.
*   **Example Queries:** "Summarize the payment terms in this MSA," "What are the insurance requirements in this contract?" "What is the termination clause?"
*   This feature provides quick insights but is always accompanied by a disclaimer to consult a legal professional.

**🎛️ Customization Options:**
*   The user can create custom contract types and tags.
*   The user can add private notes to each contract profile (e.g., "Negotiated a higher rate, see addendum A.").

**🔐 Access & Permissions:**
This is one of the most secure and private areas of the platform. All data is encrypted and visible only to the IA.

**🤝 Integrations:**
*   **Vault:** The underlying secure storage technology for the files.
*   **Firms:** Each contract is directly linked to a firm profile.
*   **Calendar:** The system automatically adds contract expiration dates and reminder deadlines to the user's calendar.
*   **AI Assistant:** Provides the intelligence for the contract analysis feature.

**📱 Mobile Adaptability:**
*   **Read-Only Access:** The IA can securely view any stored contract on their mobile device.
*   **Quick Search:** Find and review a specific contract or clause while away from the desk.
*   Receive push notifications for contract renewal reminders.

**🧩 Visual Layout Components:**
*   **List View with Key Metadata:** A clean, table-based view of all contracts showing Firm, Type, Status, and Expiration Date.
*   **Secure Document Viewer:** A high-fidelity, in-app viewer for PDFs that prevents printing or unauthorized sharing if needed.
*   **Timeline Visualization:** A visual timeline showing all upcoming contract expiration dates.
*   **Clear Status Indicators:** Color-coded badges for contract statuses (`Active`, `Expired`).

---



---

### **WIDGET** #24: Flex.IA Admin Panel**
*Corresponds to the **Admin Panel** page, visible only to Flex.IA staff.*

**Purpose:**
To provide the internal Flex.IA team with the tools needed to manage the entire platform, including users, firms, subscriptions, and support. This is the "god mode" control panel that ensures the smooth operation of the entire ecosystem.

**🔧 Core Features & Functionality:**
✅ **User Management Dashboard**
A comprehensive dashboard to manage all IA user accounts.
*   **Search & View:** Find users by name, email, or user ID. View their profile, subscription status, and activity logs.
*   **Account Actions:** Reset passwords, verify accounts, manage subscription levels, and suspend accounts for terms of service violations.

✅ **Firm Onboarding & Management**
A dashboard to manage the pipeline of new firms applying to the network.
*   **Application Queue:** A list of all firms that have applied to join the Flex.IA network.
*   **Vetting Tools:** Tools to review a firm's credentials, business history, and contact information.
*   **Onboarding & Activation:** Approve firms and activate their profiles in the `Firms` network directory.
*   **Manage Existing Partners:** Update firm profiles and manage relationships.

✅ **Platform-Wide Analytics**
A master analytics dashboard showing platform-wide metrics for the Flex.IA business.
*   **Growth Metrics:** Track user growth, new firm acquisition, and subscription revenue.
*   **Engagement Metrics:** Monitor daily/monthly active users, feature adoption rates, and claim volume across the platform.
*   **Health Metrics:** Monitor system performance, API error rates, and database load.

✅ **Support Ticket System**
A built-in system for the support team to manage and respond to help requests from IAs and firms, integrated with the `Knowledge Base`.

✅ **Broadcast Messaging & Content Management**
*   **Broadcast Tool:** A tool for Flex.IA staff to send important announcements or system-wide notifications to all users (e.g., "Scheduled maintenance tonight at 2 AM").
*   **Content Management:** The interface for creating and editing articles in the `Knowledge Base` and moderating the `Community Forum`.

**🧠 Intelligent Features:**
**Fraud Detection:**
AI-powered tools that monitor for suspicious activity, such as multiple accounts being created from the same IP address or unusual claim data patterns, and flag them for review by the admin team.

**Churn Prediction:**
A model that analyzes user activity patterns to predict which users are at risk of churning (canceling their subscription), allowing the support team to proactively reach out.

**🎛️ Customization Options:**
*   Admins can create different internal roles with varying levels of access to the admin panel (e.g., Support Staff, Marketing, Engineering).

**🔐 Access & Permissions:**
This panel is accessible only to authenticated Flex.IA staff with the appropriate permissions. All actions taken within the admin panel are strictly logged in an immutable audit trail.

**🤝 Integrations:**
*   **All Modules:** The admin panel has oversight and management capabilities for data across the entire platform.
*   **Stripe/Billing Provider:** Deep integration to manage subscriptions and view payment data.
*   **Internal Monitoring Tools (Datadog, etc.):** Integrates with system health monitoring services.

**📱 Mobile Adaptability:**
A simplified, read-only mobile version for admins to monitor key platform health metrics and view urgent support tickets on the go. Major administrative actions are restricted to the desktop interface for security.

**🧩 Visual Layout Components:**
*   **Data-Dense Tables & Dashboards:** A professional, information-rich interface designed for efficient data management.
*   **Powerful Search & Filtering:** The ability to quickly find any user, firm, or piece of data is paramount.
*   **Impersonation Feature:** A secure feature allowing a support admin to temporarily "view as" a specific user to troubleshoot problems, with the user's explicit permission.
*   **Clear Audit Logs:** An easily searchable and readable log of all administrative actions.

---






---------------------

### **WIDGET #26: Note & Voice Memo Hub**
*This is a core utility, accessible from a quick-action button and integrated within the **Claims** hub.*

**Purpose:**
To provide a powerful, flexible system for capturing critical information in any format—typed text, audio recordings, or photos with annotations—and automatically linking it to the correct claim. This ensures no detail is lost, whether in the office, in the car, or on-site at an inspection.

**🔧 Core Features & Functionality:**
✅ **Multi-Format Note Creation**
A versatile editor that allows the IA to create rich, detailed notes.
*   **Rich Text Editor:** A simple but powerful editor for typed notes with formatting options like bold, italics, bullet points, and checklists.
*   **One-Tap Voice Memos:** A prominent microphone button allows the IA to instantly start recording audio. This is critical for capturing thoughts hands-free while driving or walking a loss site.
*   **Photo Notes:** Attach photos directly within a note and add annotations (arrows, circles, text) to highlight specific details.

✅ **Automatic Transcription & Tagging**
*   **AI-Powered Transcription:** Every voice memo is automatically transcribed into searchable text with high accuracy. The audio player and transcript are synced, so clicking on a word in the text jumps to that point in the audio.
*   **Smart Tagging:** The system analyzes the content of both typed notes and transcribed voice memos to suggest relevant tags (e.g., `roof damage`, `insured statement`, `contractor estimate`, `follow-up needed`).

✅ **Seamless Claim Integration**
*   **Direct Linking:** Every note, whether created from the main dashboard or on mobile, can be instantly assigned to a specific claim file in the `Claims` hub.
*   **Timeline Visibility:** All saved notes and voice memos appear as chronological entries in the claim's master timeline, providing a complete narrative of the file's history.

✅ **Global Search**
A powerful search function that looks across all notes and memos for all claims. The search queries the note title, the body of typed text, and the AI-generated transcripts of all voice memos.

**🧠 Intelligent Features:**
**Action Item Detection:**
The `AI Assistant` scans notes and transcripts for action-oriented language (e.g., "I need to call the insured back tomorrow," "Remember to request the engineer's report"). It then automatically suggests creating a corresponding task in the Task Checklist module with a pre-filled description and suggested due date.

**Entity Recognition:**
The system can identify and highlight key entities within a note, such as names, phone numbers, email addresses, and dollar amounts, allowing the IA to take action on them (e.g., click-to-call a phone number).

**🎛️ Customization Options:**
*   The user can create custom note templates for recurring events, like "Initial Insured Interview" or "Contractor Meeting Summary."
*   The user can set their preferred audio quality for voice memos to balance file size and clarity.

**🔐 Access & Permissions:**
All notes and voice memos are private to the IA and securely stored within the context of their claims. They are never visible to source firms unless explicitly included in a generated report.

**🤝 Integrations:**
*   **Claims Hub:** The primary integration point. Notes are created for and stored within specific claims.
*   **Task Checklist & Workflow Automation:** The source for AI-suggested action items.
*   **AI Assistant:** Powers transcription, tagging, and action item detection.
*   **Vault:** The underlying secure storage for the audio files and any photo attachments.

**📱 Mobile Adaptability:**
This is a mobile-first module, designed for in-the-field data capture.
*   **"Quick Note" Widget:** A home screen widget on iOS/Android for instant access to start a new note or voice memo without fully opening the app.
*   **Background Recording:** Voice memos can continue recording even if the app is minimized or the screen is locked.
*   **Offline Capability:** Create and save notes and memos offline; they will automatically sync and transcribe once a connection is restored.

**🧩 Visual Layout Components:**
*   **Unified Feed:** A central page showing a reverse-chronological feed of all recent notes across all claims.
*   **Note "Cards":** Each note in the feed is a card showing the claim it's linked to, a preview of the text, tags, and a mini audio player if it's a voice memo.
*   **Integrated Player/Transcript View:** A clean interface that displays the audio player and the synced, scrollable transcript side-by-side.
*   **Simple Annotation Tools:** An intuitive toolbar for adding basic shapes and text to photo notes.

---

### **WIDGET #27: Task Checklist & Workflow Automation**
*This is a core organizational tool, appearing as a dedicated tab within the detailed view of every claim in the **Claims Hub**.*

**Purpose:**
To help the Independent Adjuster manage the dozens of micro-tasks and deadlines associated with each claim. This module provides structure, ensures no steps are missed, and automates recurring workflows to enforce best practices and meet firm-specific Service Level Agreements (SLAs).

**🔧 Core Features & Functionality:**
✅ **Dynamic Task Checklists**
An interactive checklist for every claim.
*   **Task Creation:** Quickly add tasks with descriptions, due dates, and priorities.
*   **Nested Sub-Tasks:** Break down large tasks into smaller, manageable steps (e.g., "Prepare Report" can have sub-tasks for "Review Photos," "Write Narrative," "Finalize Estimate").
*   **Color-Coded Priorities:** Visually distinguish tasks with clear priority levels (`Urgent`, `Normal`, `Low`).
*   **Drag-and-Drop Reordering:** Easily re-prioritize tasks by dragging them up or down the list.

✅ **Workflow Automation Templates**
The core of the module's power lies in its template engine.
*   **Template Library:** The IA can create and save checklist templates for different claim types (e.g., "CAT Hail," "Daily Water Loss," "Commercial Fire") or for specific firms that have unique requirements.
*   **Auto-Creation:** When a new claim is created or assigned a type, the system automatically applies the corresponding checklist template, instantly populating the claim with the required to-do list.

✅ **Intelligent & Actionable Tasks**
Tasks are more than just text; they are integrated with the platform.
*   **Actionable Links:** A task like "Upload Photos" can have a direct link that opens the file uploader for that claim. A "Schedule Inspection" task can link to the `Calendar` to create the event.
*   **Dependency Logic:** Set rules where one task cannot be marked complete until its prerequisite tasks are finished (e.g., "Submit Final Report" is locked until "Upload Signed Proof of Loss" is complete).

✅ **Reminders & Notifications**
A multi-faceted reminder system to ensure deadlines are never missed.
*   **Visual Countdown:** Tasks with due dates show a countdown (e.g., "Due in 2 days"). Overdue tasks are highlighted in red.
*   **Dashboard Integration:** A summary of upcoming and overdue tasks appears on the main `Dashboard`.
*   **Push Notifications:** The system sends mobile and email notifications for tasks that are due soon or have become overdue.

**🧠 Intelligent Features:**
**AI-Powered Task Generation:**
The `AI Assistant` can create tasks automatically based on events.
*   **From Communications:** If an email from a firm says, "Please provide an update by Friday," the AI will suggest creating a task: "Provide update to Firm X," with a due date of Friday.
*   **From Notes:** The system converts action items identified in the `Note & Voice Memo Hub` into tasks.

**Time Tracking Integration:**
Each task can have an optional "Start Timer" button, allowing the IA to track the exact amount of time spent on specific activities (like report writing or communicating with the insured), which can then be used for billing or performance analysis.

**🎛️ Customization Options:**
*   The user has full control to create, edit, and manage their library of workflow templates.
*   Notification preferences (e.g., "Remind me 24 hours before a task is due") can be configured in the main `Settings`.

**🔐 Access & Permissions:**
Task checklists are private to the IA's workflow for each claim. They are the IA's internal project plan and are not visible to the source firm.

**🤝 Integrations:**
*   **Claims Hub:** This module lives inside every claim file, providing the core to-do list.
*   **Calendar:** Due dates for tasks can be automatically synced to the main calendar for a unified view of all commitments.
*   **Note & Voice Memo Hub:** The source for AI-generated tasks based on action items.
*   **Dashboard:** Displays a summary of upcoming and overdue tasks.
*   **Earnings & Financials:** Time tracked against tasks can be pulled into the invoicing system for T&M billing.

**📱 Mobile Adaptability:**
*   **Full Checklist Access:** View and manage the complete task list for any claim on a mobile device.
*   **Quick-Add Task:** A simple interface to quickly add a new task to a claim while in the field.
*   **Check-off Functionality:** Easily mark tasks and sub-tasks as complete with a tap.

**🧩 Visual Layout Components:**
*   **Clean Checklist UI:** A modern, clean interface with checkboxes, clear task descriptions, and due dates.
*   **Progress Bar:** A visual progress bar at the top of the checklist shows the percentage of completed tasks for that claim.
*   **Filter & Sort Options:** Filter the list to show only `Incomplete`, `Complete`, or `Overdue` tasks.
*   **Template Picker:** A simple dropdown menu to apply a different workflow template to a claim if needed.




**WIDGET** #28: Notification Center
This is a global UI element, typically accessed via a bell icon (🔔) in the main application header, with a corresponding settings page in the Settings hub.
Purpose:
To provide a single, centralized hub for all system-generated alerts, reminders, and updates. This widget prevents important information from being lost in email or overlooked, ensuring the Independent Adjuster is always aware of time-sensitive tasks, new opportunities, and critical changes across their entire book of business.
🔧 Core Features & Functionality:
✅ Unified Notification Feed
A reverse-chronological, filterable feed that aggregates all notifications from across the platform, accessible via a dropdown panel from the header.
Categorization: Notifications are automatically categorized and visually distinct (e.g., using icons and colors) for easy scanning:
New Claims: Alerts for new claim assignments from the Firms Network.
Deadlines & Tasks: Reminders for upcoming or overdue tasks and claim submission deadlines from the Task Checklist.
Communications: Alerts for new messages, emails, or portal comments from the Communications Hub.
Financials: Notifications for paid invoices or overdue payments from the Earnings module.
Compliance: Warnings for expiring licenses or certifications from the Compliance Tracker.
System Updates: Announcements about new Flex.IA features or scheduled maintenance.
✅ Interactive & Actionable Notifications
Notifications are not just static text; they are deep-linked into the application.
Direct Navigation: Clicking a notification (e.g., "New claim #5678 assigned from Firm X") takes the user directly to that specific claim file in the Claims Hub.
Quick Actions: Some notifications have inline action buttons. For example, a "New Claim" alert could have an "Acknowledge" button directly in the feed, allowing the IA to respond without leaving their current page. A task reminder could have a "Mark as Complete" or "Snooze" button.
✅ Read/Unread Status Management
Visual Indicators: Unread notifications are clearly marked with a dot or a different background color. The bell icon in the header displays a badge with the count of unread notifications.
Bulk Actions: The user can "Mark All as Read" or "Clear All" to manage the feed efficiently.
✅ Notification Snoozing
For reminders and non-critical alerts, a "Snooze" option allows the user to temporarily dismiss the notification and have it reappear later (e.g., "Remind me in 1 hour," "Remind me tomorrow at 9 AM").
🧠 Intelligent Features:
Smart Grouping:
To prevent "notification fatigue," the system intelligently groups similar alerts. Instead of 10 separate notifications for "Photo uploaded," it will create a single, expandable notification: "10 photos were successfully uploaded for Claim #1234."
Priority Highlighting:
The AI Assistant analyzes the urgency and importance of incoming notifications. Critical alerts, like an SLA deadline breach or a message from a top-tier firm, are automatically pinned to the top of the feed and may use a more prominent color to draw immediate attention.
Digest & Summary Options:
For users who prefer fewer interruptions, the system can compile non-urgent notifications into a "Daily Digest" email, summarizing all the minor events from the past 24 hours.
🎛️ Customization Options:
A dedicated section in the Settings page allows the IA to have granular control over their notifications.
Channel Control: For each notification type (e.g., "New Message"), the user can choose where to receive it: In-App Only, Push Notification, Email, or any combination.
Priority Overrides: The user can set rules to always treat notifications from a specific firm as high-priority.
"Do Not Disturb" Mode: The user can set quiet hours during which non-critical push notifications will be silenced.
🔐 Access & Permissions:
All notifications are personal and private to the logged-in IA, reflecting only events relevant to their account and claims.
🤝 Integrations:
This is a platform-wide service that aggregates alerts from nearly every other module:
Claims Hub: Generates alerts for new assignments, status changes, and approaching deadlines.
Firms Network: Creates notifications for new firm connection approvals or new opportunities.
Messages: Triggers alerts for all new incoming communications.
Earnings & Financials: Sends notifications for paid or overdue invoices.
Licensing & Compliance Tracker: Creates the alerts for expiring credentials.
Task Checklist: Powers all task-related reminders.
📱 Mobile Adaptability:
Native Push Notifications: The primary function on mobile is to deliver timely, actionable push notifications that can be tapped to open the relevant screen in the app.
In-App Feed: The full notification feed is accessible within the mobile app, with the same functionality as the desktop version.
Mobile-Specific Settings: The user can set different notification preferences for their mobile device versus their desktop.
🧩 Visual Layout Components:
Dropdown Panel: A clean, scrollable panel that appears when the bell icon is clicked, without navigating away from the current page.
Notification "Rows": Each notification is a row containing an icon, a concise message, a timestamp (e.g., "5m ago"), and a dot for unread status.
Hover Actions: Hovering over a notification row can reveal quick action buttons like "Mark as Read" or "Archive."
Empty State: A helpful message and graphic are displayed when the user has no new notifications.
"View All" Link: A link at the bottom of the dropdown that navigates to a full-page, searchable history of all notifications.








### **Module #4: Claims Management**
📄 **File Path:** `app/dashboard/claims/page.tsx`
🗂️ **Component Dependencies:** `card.tsx`, `client-button.tsx`, `badge.tsx`, `input.tsx`, `label.tsx`, `tabs.tsx`, `select.tsx`, `dialog.tsx`, `lucide-react` (various icons), `dashboard-layout.tsx`, `horizontal-filter-bar.tsx`, `useClaims` (custom hook)

🎯 **Purpose**
To provide a centralized hub for users to browse, claim, and manage insurance claims from connected firms. This module is the core of the user's workflow, allowing them to find and manage their work efficiently.

🧭 **Top-Level Tabs**
| Tab Name | Description |
| :--- | :--- |
| **Available Claims** | Displays all available claims from connected firms that are ready to be claimed. |
| **My Claims** | A consolidated view of claims the user has claimed or is currently working on. |
| **In Progress** | A focused view of claims that are currently in progress. |
| **Completed** | A list of all successfully completed claims with performance metrics. |

🔧 **Core Features & Functionality**

✅ **Stats Overview Cards**
*   A set of cards displaying      V         key metrics: Total Claims, Available Claims, In Progress Claims, Completed Claims, and Total Earned.
*   UI: `card.tsx`, `lucide-react` (FileText, CheckCircle, Clock, Trophy, DollarSign icons)

✅ **Available Claims Tab**
*   Displays a list of available claims with details like claim ID, firm, type, location, amount, and deadline.
*   Each claim has a "View Details" button and a "Claim Now" button.
*   UI: `card.tsx`, `badge.tsx`, `client-button.tsx`

✅ **My Claims Tab**
*   A list of claims that the user has claimed or is working on.
*   Each claim card shows its current status and provides relevant actions (e.g., "Update Progress").
*   UI: `card.tsx`, `badge.tsx`, `client-button.tsx`

✅ **In Progress Tab**
*   A focused view of claims that the user is actively working on.
*   UI: `card.tsx`, `badge.tsx`, `client-button.tsx`

✅ **Completed Tab**
*   A list of completed claims with performance metrics like efficiency, accuracy, bonus earned, and client rating.
*   Each claim has a "View Details" button to see the full performance report.
*   UI: `card.tsx`, `badge.tsx`, `client-button.tsx`

✅ **Claim Details Dialog**
*   A comprehensive dialog that provides a detailed view of a selected claim.
*   Includes sections for claim information, location & contact, policy details, description, and attachments.
*   For completed claims, it also displays a performance summary.
*   Provides actions to claim the claim, schedule an inspection, or open it in the firm's portal.
*   UI: `dialog.tsx`, `card.tsx`, `badge.tsx`, `client-button.tsx`

🧠 **Intelligent Features**
*   **Performance Metrics:** For completed claims, the system calculates and displays performance metrics like efficiency, accuracy, and client satisfaction.
*   **Dynamic Status and Priority Coloring:** The UI uses different colors to represent the status and priority of claims, making them easy to distinguish.

🎛️ **Customization Options**
*   **Horizontal Filter Bar:** Allows for filtering claims by status, type, firm, and priority, and includes a search bar.

🔐 **Access & Permissions**
*   Users can only claim available claims.
*   Once a claim is claimed, it is assigned to that user.

🤝 **System Integrations**
*   The page is wrapped in a `DashboardLayout`.
*   It uses a custom hook `useClaims` to fetch and manage claim data.
*   It integrates with a scheduling system for inspections.

📱 **Mobile Adaptability**
*   The layout is responsive, with grids that adapt to different screen sizes.
*   The tab labels are shortened on smaller screens to save space.

📐 **Visual Layout Components (UI Map)**
```markdown
📂 Page Layout Structure
├── 🔼 Header
│   └── Page Title and Description
├── 📊 Stats Overview Cards
├── 🗂️ Main Claims Tabs
│   ├── Available Claims Tab
│   ├── My Claims Tab
│   ├── In Progress Tab
│   └── Completed Tab
└──  modals
    └── Claim Details Dialog
```

---

### **Module #8: Enhanced Messages Page**
📄 **File Path:** `app/dashboard/messages/page.tsx`
🗂️ **Component Dependencies:** `card.tsx`, `client-button.tsx`, `badge.tsx`, `input.tsx`, `textarea.tsx`, `avatar.tsx`, `tabs.tsx`, `scroll-area.tsx`, `separator.tsx`, `label.tsx`, `select.tsx`, `checkbox.tsx`, `progress.tsx`, `dropdown-menu.tsx`, `dialog.tsx`, `popover.tsx`, `lucide-react` (various icons), `dashboard-layout.tsx`, `horizontal-filter-bar.tsx`, `sonner` (toast notifications)

🎯 Purpose To serve as a centralized Command Center for all communications, evolving beyond a simple inbox into a full-fledged Customer Relationship Management (CRM) tool. It organizes conversations by relationship, provides deep contextual information for every interaction, and integrates intelligent tools to streamline communication with firms, policyholders, and vendors.
🧭 Top-Level Tabs | Tab Name | Description | | :--- | :--- | | PRIORITY INBOX | An AI-curated feed that automatically surfaces the most urgent conversations based on sentiment, deadlines, or sender priority. | | FIRMS | A dedicated view of all conversations with claims firms. | | POLICYHOLDERS | A focused view of all conversations with insured clients. | | VENDORS | A consolidated list of all conversations with third-party vendors like roofers and mitigation companies. |
🔧 Core Features & Functionality
✅ Centered Tab Navigation
A prominent, centered navigation bar below the main header for quickly segmenting conversations.
Each tab displays a badge with the count of unread messages.
The active tab is clearly highlighted for immediate context.
✅ Contact & Relationship Management (Left Sidebar)
A dynamic, searchable list of contacts, filtered by the active top-level tab.
Contact Cards display an avatar, name, role, and unread message indicators.
A Pinned/Priority Contact (John Smith) is highlighted with a blue border and a pulsing red dot, indicating an urgent issue (Negative Sentiment).
✅ Unified Conversation Hub (Center Pane)
Displays a chronological, multi-channel message thread (showing SMS, Internal Notes, etc.).
A Conversation Header links directly to the associated claim file.
Internal Notes are visually distinct from the main conversation, allowing for private, in-context thoughts or team collaboration.
A Composition Box for replying, with integrated tools for templates and attachments.
✅ The "Oracle" Panel (Right Sidebar)
A smart, contextual panel providing at-a-glance intelligence.
Includes modules for Contact Details, a Claim Snapshot (status, deadline, address), a Key Facts Extractor (AI-surfaced details from the conversation), Quick Actions, and a Compliance Guard.
🧠 Intelligent Features
AI Co-Pilot Suggestions: Provides context-aware, one-click reply buttons to speed up responses.
Sentiment Analysis: Automatically detects and flags messages with negative sentiment, alerting the adjuster to handle the conversation with care.
Key Facts Extractor: AI scans the conversation and pulls out critical data points (names, times, specific details) into a structured list.
Compliance Guard: Automatically appends the correct state-specific license information to outgoing messages, ensuring regulatory compliance.
Priority Inbox: Uses AI to automatically triage and surface the most important conversations, saving the user from manually sorting through messages.
🎛️ Customization Options
Search Bar: Allows for quick filtering of the contact list in the left sidebar.
Template Insertion: A button in the composition box allows users to insert pre-written scripts to handle common scenarios.
🔐 Access & Permissions
Internal Notes are private to the user or their internal team, visually separated from the main conversation that is shared with the external contact.
All communications are tied to specific claims, ensuring data is organized and secure.
🤝 System Integrations
Claims Hub: The conversation is directly linked to a claim file (#HW-2025-08-451).
AI Assistant: Powers the Co-Pilot suggestions, sentiment analysis, and key facts extraction.
Document Library (Vault): The paperclip icon in the composition box would integrate with the central library for attaching files.
Calendar & Route Planner: Implied through Quick Actions like "Confirm Inspection" and "Send 'On My Way' ETA."
📱 Mobile Adaptability
The three-pane layout (List | Conversation | Context) would condense into a series of navigable screens on mobile.
The centered tab navigation would adapt into a swipeable or dropdown interface to save space.
🧩 Visual Layout Components:
Dropdown Panel: A clean, scrollable panel that appears when the bell icon is clicked, without navigating away from the current page.
Notification "Rows": Each notification is a row containing an icon, a concise message, a timestamp (e.g., "5m ago"), and a dot for unread status.
Hover Actions: Hovering over a notification row can reveal quick action buttons like "Mark as Read" or "Archive."
Empty State: A helpful message and graphic are displayed when the user has no new notifications.
"View All" Link: A link at the bottom of the dropdown that navigates to a full-page, searchable history of all notifications.
📐 Visual Layout Components (UI Map)
📂 Page Layout Structure
├── 🔼 Header (Flexia Logo, User Profile)
├── 🗂️ Centered Tab Navigation (Priority, Firms, etc.)
└── 📋 Main Content (Three-Pane Layout)
    ├── ◀️ Left Sidebar (Contact List)
    │   ├── Search Bar
    │   └── Scrollable Contact Cards
    ├── ↔️ Center Pane (Conversation Hub)
    │   ├── Conversation Header
    │   ├── Message Thread
    │   └── Composition Box
    └── ▶️ Right Sidebar (The Oracle Panel)
        ├── Contact Details Card
        ├── Claim Snapshot Card
        ├── Key Facts Card
        ├── Quick Actions Card
        └── Compliance Guard Card

```

---

### **Module #6: Earnings Dashboard**
📄 **File Path:** `app/dashboard/earnings/page.tsx`
🗂️ **Component Dependencies:** `card.tsx`, `client-button.tsx`, `badge.tsx`, `tabs.tsx`, `select.tsx`, `progress.tsx`, `table.tsx`, `lucide-react` (various icons), `dashboard-layout.tsx`, `horizontal-filter-bar.tsx`, `useEarnings` (custom hook)

🎯 **Purpose**
To provide a comprehensive and detailed overview of the user's earnings, allowing them to track their income, monitor payments from different firms, and manage their financial performance.

🧭 **Top-Level Tabs**
| Tab Name | Description |
| :--- | :--- |
| **Overview** | A high-level summary of earnings trends and performance highlights. |
| **By Firm** | A detailed breakdown of earnings from each connected IA firm. |
| **By Type** | A revenue breakdown by different types of insurance claims. |
| **Payments** | A schedule to track pending and overdue payments from IA firms. |
| **Tax Info** | A summary of year-to-date tax information and estimates. |
| **Performance** | Key performance indicators for the user's adjusting business. |

🔧 **Core Features & Functionality**

✅ **Key Metrics Cards**
*   A set of cards displaying key metrics: Monthly Earnings, Yearly Earnings, Average Per Claim, and Pending Payments.
*   UI: `card.tsx`, `lucide-react` (DollarSign, BarChart3, Target, Clock icons)

✅ **Overview Tab**
*   **Monthly Earnings Trend:** A visual representation of the last 6 months of earnings and claim volume.
*   **Performance Highlights:** Key performance indicators like claims per month, average days to complete, and client satisfaction.
*   UI: `card.tsx`, `progress.tsx`

✅ **By Firm Tab**
*   **Earnings by Firm Table:** A detailed table showing monthly and yearly earnings, claims, average payout, payment terms, status, and growth for each firm.
*   UI: `table.tsx`, `badge.tsx`, `lucide-react` (Building2, TrendingUp, TrendingDown icons)

✅ **By Type Tab**
*   **Earnings by Claim Type:** A breakdown of earnings by claim type, showing total earnings, number of claims, average payout, and percentage of total earnings.
*   UI: `card.tsx`, `progress.tsx`, `lucide-react` (FileText icon)

✅ **Payments Tab**
*   **Payment Schedule Table:** A table to track pending and overdue payments with details like payment ID, firm, amount, due date, and status.
*   UI: `table.tsx`, `badge.tsx`, `lucide-react` (Clock, AlertCircle icons)

✅ **Tax Info Tab**
*   **Tax Summary:** A summary of year-to-date earnings, estimated taxes, and deductions.
*   **Quarterly Estimates:** A schedule of estimated quarterly tax payments.
*   UI: `card.tsx`, `badge.tsx`

✅ **Performance Tab**
*   **Performance Metrics:** A detailed look at business performance indicators like claims per month, average days to complete, and client satisfaction.
*   **Business Growth:** Metrics on referral rate, repeat business, and efficiency score.
*   UI: `card.tsx`, `progress.tsx`

🧠 **Intelligent Features**
*   **Growth Calculation:** The "By Firm" tab calculates and displays the growth percentage for each firm.
*   **Dynamic Status Coloring:** The UI uses different colors to represent the status of payments and firms.

🎛️ **Customization Options**
*   **Date Range Filter:** Users can filter the earnings data by month, quarter, or year.
*   **Horizontal Filter Bar:** Allows for filtering by period, status, and firm, and includes a search bar.

🔐 **Access & Permissions**
*   Users can only view their own earnings data.

🤝 **System Integrations**
*   The page is wrapped in a `DashboardLayout`.
*   It uses a custom hook `useEarnings` to fetch and manage earnings data.

📱 **Mobile Adaptability**
*   The layout is responsive, with grids that adapt to different screen sizes.
*   The tab labels are shortened on smaller screens.

📐 **Visual Layout Components (UI Map)**
```markdown
📂 Page Layout Structure
├── 🔼 Header
│   ├── Page Title and Description
│   ├── Date Range Selector
│   └── Export Report Button
├── 📊 Key Metrics Cards
├── 🗂️ Main Earnings Tabs
│   ├── Overview Tab
│   ├── By Firm Tab
│   ├── By Type Tab
│   ├── Payments Tab
│   ├── Tax Info Tab
│   └── Performance Tab
```

---

### **Module #7: Firms Management**
📄 **File Path:** `app/dashboard/firms/page.tsx`
🗂️ **Component Dependencies:** `card.tsx`, `client-button.tsx`, `badge.tsx`, `input.tsx`, `label.tsx`, `switch.tsx`, `dialog.tsx`, `alert.tsx`, `progress.tsx`, `lucide-react` (various icons), `dashboard-layout.tsx`, `horizontal-filter-bar.tsx`, `useFirms` (custom hook)

🎯 **Purpose**
To provide a centralized interface for users to manage their connections and integrations with various IA firms. This module allows users to add, configure, and monitor the status of their firm connections.

🧭 **Top-Level Tabs**
This module does not have top-level tabs. It uses a filtering system to navigate through the connected firms.

🔧 **Core Features & Functionality**

✅ **Summary Stats Cards**
*   A set of cards displaying key metrics: Total Firms, Active Claims, Average Success Rate, and Sync Errors.
*   UI: `card.tsx`, `lucide-react` (Building2, Activity, CheckCircle, AlertTriangle icons)

✅ **Add/Edit Firm Dialog**
*   A dialog for adding a new firm connection or editing an existing one.
*   Fields for firm name, portal URL, username, password, and API key.
*   Includes a toggle to enable or disable automatic sync.
*   UI: `dialog.tsx`, `input.tsx`, `label.tsx`, `switch.tsx`, `alert.tsx`, `client-button.tsx`

✅ **Firms Grid**
*   A grid of cards, with each card representing a connected firm.
*   Each card displays the firm's name, URL, connection status, last sync time, and number of active claims.
*   It also shows the connection type and a progress bar for the success rate.
*   Includes an error alert if the last sync failed.
*   Actions: "Details," "Sync," and "Edit."
*   UI: `card.tsx`, `badge.tsx`, `progress.tsx`, `alert.tsx`, `client-button.tsx`

✅ **Firm Details Dialog**
*   A detailed view of a selected firm, showing connection details and statistics.
*   Statistics include total claims, active claims, completed claims, and average response time.
*   Provides actions to test the connection, sync now, and access settings.
*   UI: `dialog.tsx`, `card.tsx`, `badge.tsx`, `client-button.tsx`

🧠 **Intelligent Features**
*   **Dynamic Status and Coloring:** The UI uses different colors and icons to represent the status of each firm connection (Connected, Syncing, Error, Disabled).
*   **Error Reporting:** If a sync fails, the UI displays an error message with details.

🎛️ **Customization Options**
*   **Horizontal Filter Bar:** Allows for filtering firms by status, connection type, and rating, and includes a search bar.
*   **Configurable Sync:** Users can enable or disable automatic sync for each firm.

🔐 **Access & Permissions**
*   Users can only manage their own firm connections.
*   Credentials are encrypted and stored securely.

🤝 **System Integrations**
*   The page is wrapped in a `DashboardLayout`.
*   It uses a custom hook `useFirms` to manage firm data and connections.

📱 **Mobile Adaptability**
*   The layout is responsive, with a grid that adapts to different screen sizes.

📐 **Visual Layout Components (UI Map)**
```markdown
📂 Page Layout Structure
├── 🔼 Header
│   ├── Page Title and Description
│   └── Add Firm Button
├── 📊 Summary Stats Cards
├── 🔍 Horizontal Filter Bar
├── 🏢 Firms Grid
│   └── Firm Card (repeated for each firm)
└──  modals
    ├── Add/Edit Firm Dialog
    └── Firm Details Dialog
```

---

### **Module #3: Inspection Calendar**
📄 **File Path:** `app/dashboard/calendar/page.tsx`
🗂️ **Component Dependencies:** `card.tsx`, `client-button.tsx`, `badge.tsx`, `input.tsx`, `label.tsx`, `textarea.tsx`, `select.tsx`, `dialog.tsx`, `tabs.tsx`, `lucide-react` (various icons), `dashboard-layout.tsx`, `horizontal-filter-bar.tsx`

🎯 **Purpose**
To provide a comprehensive and interactive calendar system for scheduling, managing, and tracking property inspections. This module helps users organize their schedule, view inspection details, and manage their workflow efficiently.

🧭 **Top-Level Tabs**
| Tab Name | Description |
| :--- | :--- |
| **Calendar View** | A visual, month-based calendar displaying all scheduled inspections. |
| **Today** | A focused view of all inspections scheduled for the current day. |
| **Upcoming** | A detailed list of all future inspections. |
| **Completed** | A list of all inspections that have been marked as completed. |

🔧 **Core Features & Functionality**

✅ **Quick Stats Cards**
*   A set of cards displaying key metrics: Today's Inspections, This Week's Inspections, High Priority Inspections, and Completed Inspections.
*   UI: `card.tsx`, `lucide-react` (Calendar, Clock, AlertCircle, CheckCircle icons)

✅ **Calendar View Tab**
*   A traditional month-based calendar grid.
*   Each day cell shows a summary of inspections for that day.
*   Highlights the current day.
*   UI: `card.tsx`

✅ **Today Tab**
*   A list of inspections scheduled for the current day.
*   Each inspection card shows the title, priority, time, and location.
*   Includes buttons to get directions and start the inspection.
*   UI: `card.tsx`, `badge.tsx`, `client-button.tsx`

✅ **Upcoming Tab**
*   A detailed list of all upcoming inspections.
*   Each inspection card shows the title, firm, status, priority, date, time, duration, location, and type.
*   Includes buttons to view details, get directions, and edit the inspection.
*   UI: `card.tsx`, `badge.tsx`, `client-button.tsx`

✅ **Completed Tab**
*   A list of all completed inspections.
*   Each inspection card shows the title, status, date, location, and firm.
*   Includes a button to view the inspection report.
*   UI: `card.tsx`, `badge.tsx`, `client-button.tsx`

✅ **Schedule/Edit Inspection Dialog**
*   A dialog for scheduling a new inspection or editing an existing one.
*   Fields for title, claim ID, firm, type, date, time, address, contact information, description, and special instructions.
*   UI: `dialog.tsx`, `input.tsx`, `label.tsx`, `textarea.tsx`, `select.tsx`, `client-button.tsx`

✅ **Inspection Details Dialog**
*   A detailed view of a selected inspection, showing all its information in a well-organized layout.
*   Includes sections for inspection details, location & weather, contact information, equipment & notes, and description & instructions.
*   Provides actions to edit, get directions, and mark the inspection as complete.
*   UI: `dialog.tsx`, `card.tsx`, `badge.tsx`, `client-button.tsx`

🧠 **Intelligent Features**
*   **Dynamic Status and Priority Coloring:** The UI uses different colors to represent the status and priority of inspections, making it easy to identify them at a glance.
*   **Weather Information:** The inspection details include weather information for the location.

🎛️ **Customization Options**
*   **View Mode:** Users can switch between Day, Week, and Month views for the calendar.
*   **Horizontal Filter Bar:** Allows for filtering inspections by type and status, and includes a search bar.

🔐 **Access & Permissions**
*   Users can schedule, edit, and delete their own inspections.

🤝 **System Integrations**
*   The page is wrapped in a `DashboardLayout`.
*   It integrates with a mapping service to provide directions to inspection locations.

📱 **Mobile Adaptability**
*   The layout is responsive, with grids that adapt to different screen sizes.
*   The tab labels are shortened on smaller screens to save space.

📐 **Visual Layout Components (UI Map)**
```markdown
📂 Page Layout Structure
├── 🔼 Header
│   ├── Page Title and Description
│   ├── View Mode Selector
│   └── Schedule Inspection Button
├── 📊 Quick Stats Cards
├── 🗂️ Main Calendar Tabs
│   ├── Calendar View Tab
│   ├── Today Tab
│   ├── Upcoming Tab
│   └── Completed Tab
└──  modals
    ├── Schedule/Edit Inspection Dialog
    └── Inspection Details Dialog
```

---

### **Module #2: Analytics Dashboard**
📄 **File Path:** `app/dashboard/analytics/page.tsx`
🗂️ **Component Dependencies:** `card.tsx`, `client-button.tsx`, `badge.tsx`, `tabs.tsx`, `select.tsx`, `progress.tsx`, `table.tsx`, `lucide-react` (various icons), `dashboard-layout.tsx`, `horizontal-filter-bar.tsx`

🎯 **Purpose**
To provide users with a comprehensive and in-depth view of their performance, offering detailed analytics, business insights, and forecasting to help them understand and improve their work.

🧭 **Top-Level Tabs**
| Tab Name | Description |
| :--- | :--- |
| **Overview** | Displays a high-level summary of performance trends and goal progress. |
| **Firms** | Provides a detailed breakdown of performance metrics by individual IA firms. |
| **Claims** | Analyzes performance based on different claim types. |
| **Time Analysis** | Shows performance patterns based on time of day, day of the week, and season. |
| **Competitive** | Compares the user's performance against industry averages and rankings. |
| **Forecasting** | Provides AI-powered forecasts for future performance and recommendations for improvement. |

🔧 **Core Features & Functionality**

✅ **Key Performance Indicators (KPIs)**
*   A set of cards displaying key metrics: Monthly Earnings, Claims Processed, Efficiency Score, and Client Satisfaction.
*   Each card shows the current value, growth from the previous period, and progress towards a target.
*   UI: `card.tsx`, `progress.tsx`, `lucide-react` (DollarSign, FileText, Target, Award icons)

✅ **Overview Tab**
*   **Performance Trends:** A 6-month overview of earnings, claims, efficiency, and satisfaction.
*   **Goal Progress:** Progress bars tracking monthly and yearly targets for key metrics.
*   UI: `card.tsx`, `progress.tsx`

✅ **Firms Tab**
*   **Firm Performance Analysis Table:** A detailed table comparing performance across different IA firms.
*   Metrics include claims, earnings, average payout, efficiency, satisfaction, response time, and growth.
*   UI: `table.tsx`, `progress.tsx`

✅ **Claims Tab**
*   **Claim Type Analysis:** A breakdown of performance by claim type (e.g., Property Damage, Auto Collision).
*   Each type shows total earnings, average payout, average days to complete, and satisfaction.
*   UI: `card.tsx`, `progress.tsx`

✅ **Time Analysis Tab**
*   **Peak Performance Hours:** Shows the user's most productive hours of the day.
*   **Weekly Performance:** Analyzes performance by day of the week.
*   **Seasonal Trends:** Displays performance patterns throughout the year.
*   UI: `card.tsx`, `progress.tsx`, `badge.tsx`

✅ **Competitive Tab**
*   **Industry Comparison:** Compares the user's performance metrics against industry averages.
*   **Industry Rankings:** Shows the user's ranking among other independent adjusters for earnings, efficiency, and satisfaction.
*   UI: `card.tsx`, `progress.tsx`

✅ **Forecasting Tab**
*   **Forecast Cards:** Displays AI-powered forecasts for the next month, quarter, and year-end.
*   **Recommendations:** Provides AI-powered insights to help the user improve their performance.
*   UI: `card.tsx`, `badge.tsx`, `lucide-react` (TrendingUp, Target, AlertTriangle, Award icons)

🧠 **Intelligent Features**
*   **AI-Powered Recommendations:** The forecasting tab provides actionable insights to improve performance.
*   **Forecasting:** The system projects future earnings and claim volume with confidence scores.
*   **Competitive Analysis:** The platform benchmarks user performance against the broader industry.

🎛️ **Customization Options**
*   **Date Range Filter:** Users can filter the analytics data by week, month, quarter, or year.
*   **Horizontal Filter Bar:** Allows for filtering by metric and period, and includes a search bar.

🔐 **Access & Permissions**
*   Users can only view their own analytics data.

🤝 **System Integrations**
*   The page is wrapped in a `DashboardLayout`, making it a core part of the user's dashboard experience.
*   It pulls data from various sources, including claims, earnings, and user data, to generate its analytics.

📱 **Mobile Adaptability**
*   The layout is responsive, with grids that adapt to different screen sizes.
*   The tab labels are shortened on smaller screens to save space.

📐 **Visual Layout Components (UI Map)**
```markdown
📂 Page Layout Structure
├── 🔼 Header
│   ├── Page Title and Description
│   ├── Date Range Selector
│   └── Export Report Button
├── 📊 Key Performance Indicators (KPIs)
├── 🗂️ Main Analytics Tabs
│   ├── Overview Tab
│   │   ├── Performance Trends
│   │   └── Goal Progress
│   ├── Firms Tab
│   │   └── Firm Performance Analysis Table
│   ├── Claims Tab
│   │   └── Claim Type Analysis
│   ├── Time Analysis Tab
│   │   ├── Peak Performance Hours
│   │   ├── Weekly Performance
│   │   └── Seasonal Trends
│   ├── Competitive Tab
│   │   ├── Industry Comparison
│   │   └── Industry Rankings
│   └── Forecasting Tab
│       ├── Forecast Cards
│       └── Recommendations
```

---

### **Module #12: Vault**
📄 **File Path:** `app/dashboard/vault/page.tsx`
🗂️ **Component Dependencies:** `card.tsx`, `client-button.tsx`, `badge.tsx`, `input.tsx`, `label.tsx`, `tabs.tsx`, `select.tsx`, `textarea.tsx`, `dialog.tsx`, `lucide-react` (various icons), `dashboard-layout.tsx`, `horizontal-filter-bar.tsx`

🎯 **Purpose**
To provide a secure and centralized repository for users to store, manage, and track their important documents, licenses, certifications, and contracts.

🧭 **Top-Level Tabs**
| Tab Name | Description |
| :--- | :--- |
| **Documents** | Manage personal and professional documents, such as licenses and certifications. |
| **Contracts** | Manage contracts with IA firms. |

🔧 **Core Features & Functionality**

✅ **Stats Cards**
*   **Documents Tab:** Displays stats for total documents, active documents, expiring documents, and expired documents.
*   **Contracts Tab:** Displays stats for total contracts, active contracts, pending signature, and expired contracts.
*   UI: `card.tsx`, `lucide-react` (various icons)

✅ **Add/Edit Item Dialog**
*   A dialog for uploading a new document or creating a new contract.
*   The dialog has tabs to switch between "Upload Document" and "New Contract."
*   **Document Form:** Fields for document name, category, expiry date, tags, and description.
*   **Contract Form:** Fields for contract title, firm, effective date, expiry date, and description.
*   UI: `dialog.tsx`, `tabs.tsx`, `input.tsx`, `label.tsx`, `select.tsx`, `textarea.tsx`, `client-button.tsx`

✅ **Documents/Contracts List**
*   Displays a list or grid of documents or contracts, depending on the selected view mode.
*   Each item shows its name/title, category/firm, status, and other relevant details.
*   Actions: "View Details," "Download," "Share," and "Edit."
*   UI: `card.tsx`, `badge.tsx`, `client-button.tsx`

✅ **Item Details Dialog**
*   A detailed view of a selected document or contract.
*   **Document Details:** Shows document information, description, and attachments.
*   **Contract Details:** Shows contract information, financial terms, territory, specialties, clauses, description, and attachments.
*   Provides actions to download, share, or sign the item.
*   UI: `dialog.tsx`, `card.tsx`, `badge.tsx`, `client-button.tsx`

🧠 **Intelligent Features**
*   **Dynamic Status Coloring:** The UI uses different colors and icons to represent the status of documents and contracts.
*   **View Mode Toggle:** Users can switch between a grid view and a list view to see their items.

🎛️ **Customization Options**
*   **Horizontal Filter Bar:** Allows for filtering items by type and status, and includes a search bar.

🔐 **Access & Permissions**
*   All documents and contracts are stored securely.

🤝 **System Integrations**
*   The page is wrapped in a `DashboardLayout`.

📱 **Mobile Adaptability**
*   The layout is responsive, with grids that adapt to different screen sizes.

📐 **Visual Layout Components (UI Map)**
```markdown
📂 Page Layout Structure
├── 🔼 Header
│   ├── Page Title and Description
│   └── Add New Button
├── 🔍 Horizontal Filter Bar
├── 🗂️ Main Vault Tabs (Documents/Contracts)
│   ├── Stats Cards
│   ├── View Mode Toggle
│   └── Items Grid/List
└──  modals
    ├── Add/Edit Item Dialog
    └── Item Details Dialog
```

---

### **Module #10: Settings**
📄 **File Path:** `app/dashboard/settings/page.tsx`
🗂️ **Component Dependencies:** `card.tsx`, `client-button.tsx`, `input.tsx`, `label.tsx`, `switch.tsx`, `textarea.tsx`, `select.tsx`, `tabs.tsx`, `avatar.tsx`, `badge.tsx`, `alert.tsx`, `progress.tsx`, `dialog.tsx`, `lucide-react` (various icons), `dashboard-layout.tsx`, `integrations-section.tsx`, `affiliate-dashboard.tsx`

🎯 **Purpose**
To provide a centralized and comprehensive interface for users to manage all aspects of their account, including personal information, notifications, security, privacy, billing, and integrations.

🧭 **Top-Level Tabs**
| Tab Name | Description |
| :--- | :--- |
| **Profile** | Manage personal and professional information. |
| **Notifications** | Configure notification preferences across different channels. |
| **Security** | Manage password, two-factor authentication, and connected devices. |
| **Privacy** | Control profile visibility and data sharing settings. |
| **Integrations** | Connect and manage third-party application integrations. |
| **Billing** | Manage subscription, payment methods, and view billing history. |
| **Feedback** | Submit feedback, bug reports, or feature requests. |
| **Support** | Create and manage support tickets. |
| **Affiliate** | Access the affiliate program dashboard. |

🔧 **Core Features & Functionality**

✅ **Profile Tab**
*   **Profile Information:** Update first name, last name, email, phone, license number, and state.
*   **Avatar Management:** Upload and remove profile photo.
*   **Professional Information:** Update website and professional bio.
*   UI: `card.tsx`, `avatar.tsx`, `input.tsx`, `label.tsx`, `textarea.tsx`, `select.tsx`, `client-button.tsx`

✅ **Notifications Tab**
*   **Notification Channels:** Toggle email, SMS, and push notifications.
*   **Notification Types:** Enable or disable notifications for specific events like new claims, payment alerts, and weekly reports.
*   UI: `card.tsx`, `switch.tsx`

✅ **Security Tab**
*   **Password Management:** Change account password.
*   **Two-Factor Authentication:** Enable and configure 2FA.
*   **Connected Devices:** View and revoke access for connected devices.
*   **Login History:** A log of recent login activity.
*   UI: `card.tsx`, `input.tsx`, `label.tsx`, `switch.tsx`, `badge.tsx`, `client-button.tsx`

✅ **Privacy Tab**
*   **Profile Visibility:** Control who can see your profile (public, firms only, private).
*   **Data & Analytics:** Manage data sharing and analytics tracking preferences.
*   **Data Management:** Export all personal data or delete the account.
*   UI: `card.tsx`, `select.tsx`, `switch.tsx`, `dialog.tsx`, `client-button.tsx`

✅ **Integrations Tab**
*   A dedicated section for managing integrations with third-party services like calendars, accounting software, and storage providers.
*   UI: `integrations-section.tsx`

✅ **Billing Tab**
*   **Current Subscription:** View and change the current subscription plan.
*   **Payment Methods:** Add, edit, and delete payment methods.
*   **Billing History:** A list of past invoices with download links.
*   **Usage & Limits:** Track usage against plan limits.
*   UI: `card.tsx`, `progress.tsx`, `dialog.tsx`, `client-button.tsx`

✅ **Feedback Tab**
*   A form to submit feedback, including type, priority, subject, description, and attachments.
*   UI: `card.tsx`, `select.tsx`, `input.tsx`, `textarea.tsx`, `client-button.tsx`

✅ **Support Tab**
*   **Contact Support Form:** A form to create a new support ticket.
*   **My Support Tickets:** A list of existing support tickets with their status.
*   UI: `card.tsx`, `select.tsx`, `input.tsx`, `textarea.tsx`, `client-button.tsx`, `badge.tsx`

✅ **Affiliate Tab**
*   A dedicated dashboard for the affiliate program.
*   UI: `affiliate-dashboard.tsx`

🧠 **Intelligent Features**
*   **Comprehensive Account Management:** Consolidates all user settings into a single, easy-to-navigate interface.
*   **Granular Control:** Provides detailed control over notifications, privacy, and integrations.

🎛️ **Customization Options**
*   Users can customize their profile, notifications, and privacy settings to their liking.

🔐 **Access & Permissions**
*   Users can only manage their own account settings.
*   Account deletion is a protected action that requires confirmation.

🤝 **System Integrations**
*   The page is wrapped in a `DashboardLayout`.
*   It integrates with various external services through the `IntegrationsSection`.

📱 **Mobile Adaptability**
*   The layout is responsive, with grids that adapt to different screen sizes.
*   The tab labels are shortened on smaller screens.

📐 **Visual Layout Components (UI Map)**
```markdown
📂 Page Layout Structure
├── 🔼 Header
│   ├── Page Title and Description
│   └── Export Data Button
├── 🗂️ Main Settings Tabs
│   ├── Profile Tab
│   ├── Notifications Tab
│   ├── Security Tab
│   ├── Privacy Tab
│   ├── Integrations Tab
│   ├── Billing Tab
│   ├── Feedback Tab
│   ├── Support Tab
│   └── Affiliate Tab
```

---

### **Module #1: Admin Panel**
📄 **File Path:** `app/dashboard/admin/page.tsx`
🗂️ **Component Dependencies:** `card.tsx`, `client-button.tsx`, `badge.tsx`, `input.tsx`, `label.tsx`, `tabs.tsx`, `select.tsx`, `switch.tsx`, `table.tsx`, `dialog.tsx`, `lucide-react` (various icons), `dashboard-layout.tsx`

🎯 **Purpose**
To provide a comprehensive interface for administrators to monitor, manage, and configure the entire Flex.IA platform. This panel serves as the central hub for user management, system health monitoring, firm management, and system-wide settings.

🧭 **Top-Level Tabs**
| Tab Name | Description |
| :--- | :--- |
| **Dashboard** | Provides a high-level overview of key business and system metrics. |
| **Sales** | Displays detailed sales performance data, including revenue and signup trends. |
| **Customers** | Allows for the management of all user accounts, including creation, editing, and viewing details. |
| **Subscriptions** | (No UI defined in the provided file) |
| **Waitlist** | (No UI defined in the provided file) |
| **Firms** | Provides tools to monitor and manage connected IA firms. |
| **System** | Displays system health status and provides tools for maintenance tasks. |
| **Settings** | Allows for the configuration of system-wide and security settings. |
| **Logs** | Displays system logs for monitoring activity and errors. |

🔧 **Core Features & Functionality**

✅ **Dashboard Tab**
*   **System Overview Cards**
    *   Displays key metrics: Total Users, Total Claims, Connected Firms, and System Uptime.
    *   UI: `card.tsx`, `lucide-react` (Users, Activity, Shield, Server icons)
*   **Business Metrics Cards**
    *   Displays key business metrics: Monthly Revenue, New Signups, Conversion Rate, and Churn Rate.
    *   UI: `card.tsx`, `lucide-react` (DollarSign, Users, Activity, AlertTriangle icons)
*   **Recent Activity**
    *   **Recent Signups:** A list of the latest customer acquisitions.
    *   **Revenue Trend:** A summary of monthly revenue growth.
    *   UI: `card.tsx`, `badge.tsx`

✅ **Sales Tab**
*   **Sales Performance Table**
    *   A table displaying monthly sales data, including revenue, signups, churn, and growth.
    *   UI: `table.tsx`
*   **Key Metrics**
    *   Visual progress bars for ARPU, Conversion Rate, and Churn Rate.
    *   UI: `card.tsx`

✅ **Customers Tab**
*   **User Management Table**
    *   A table of all users with columns for User, Role, Status, Claims, Earnings, and Last Login.
    *   Actions: View Details, Edit, Suspend/Delete.
    *   UI: `table.tsx`, `badge.tsx`, `client-button.tsx`, `dialog.tsx`, `lucide-react` (Eye, Edit, Trash2, AlertTriangle icons)
*   **Add User Dialog**
    *   A dialog for creating a new user account with fields for name, email, role, and subscription.
    *   UI: `dialog.tsx`, `input.tsx`, `label.tsx`, `select.tsx`, `client-button.tsx`
*   **User Details Dialog**
    *   A dialog that displays detailed information about a selected user, including their stats.
    *   UI: `dialog.tsx`, `label.tsx`, `badge.tsx`

✅ **Firms Tab**
*   **Firm Management Table**
    *   A table of all connected firms with columns for Firm, Status, Users, Claims, Response Time, Success Rate, and Last Sync.
    *   Actions: View Details, Settings.
    *   UI: `table.tsx`, `badge.tsx`, `client-button.tsx`, `lucide-react` (Eye, Settings icons)

✅ **System Tab**
*   **System Health Status**
    *   A list of system components (Database, API Services, etc.) with their health status.
    *   UI: `card.tsx`, `badge.tsx`, `lucide-react` (CheckCircle, AlertTriangle icons)
*   **System Actions**
    *   Buttons to perform maintenance tasks like restarting services, clearing cache, and creating backups.
    *   A toggle for enabling maintenance mode.
    *   UI: `card.tsx`, `client-button.tsx`, `switch.tsx`

✅ **Logs Tab**
*   **System Logs**
    *   A list of system logs with level, message, timestamp, and source.
    *   Filter by log level.
    *   UI: `card.tsx`, `badge.tsx`, `select.tsx`, `client-button.tsx`

✅ **Settings Tab**
*   **System Configuration**
    *   Form fields for configuring system settings like max users, sync interval, and session timeout.
    *   Toggles for maintenance mode and debug logging.
    *   UI: `card.tsx`, `input.tsx`, `label.tsx`, `switch.tsx`
*   **Security Settings**
    *   Form fields for configuring security settings like password length, login attempts, and lockout duration.
    *   Toggles for requiring 2FA and IP whitelisting.
    *   UI: `card.tsx`, `input.tsx`, `label.tsx`, `switch.tsx`
*   **Backup & Recovery**
    *   Displays backup information and provides buttons for creating, restoring, and downloading backups.
    *   UI: `card.tsx`, `client-button.tsx`, `lucide-react` (Database, Upload, Download icons)

🧠 **Intelligent Features**
*   The page dynamically renders status colors based on the status of users, firms, and logs.
*   The sales tab calculates and displays revenue growth percentage.

🎛️ **Customization Options**
*   The admin can configure various system and security settings to tailor the platform to their needs.

🔐 **Access & Permissions**
*   This page is intended for users with the "Admin" role.
*   Admins can suspend or delete users.

🤝 **System Integrations**
*   The page is wrapped in a `DashboardLayout`, indicating it's part of the main application dashboard.
*   It interacts with various data sources for users, firms, sales, and system logs.

📱 **Mobile Adaptability**
*   The layout uses responsive grid classes (`grid-cols-4`, `md:grid-cols-2`, `lg:grid-cols-4`) to adapt to different screen sizes.
*   The top-level tabs have shorter labels for smaller screens.

📐 **Visual Layout Components (UI Map)**
```markdown
📂 Page Layout Structure
├── 🔼 Header
│   ├── Page Title and Description
│   └── Action Buttons (Export Logs, System Settings)
├── 📊 System Overview Cards
├── 🗂️ Admin Tabs
│   ├── Dashboard Tab
│   │   ├── Business Metrics Cards
│   │   └── Recent Activity Section
│   ├── Sales Tab
│   │   ├── Sales Performance Table
│   │   └── Key Metrics Section
│   ├── Customers Tab
│   │   └── User Management Table
│   ├── Firms Tab
│   │   └── Firm Management Table
│   ├── System Tab
│   │   ├── System Health Status
│   │   └── System Actions
│   ├── Logs Tab
│   │   └── System Logs
│   └── Settings Tab
│       ├── System Configuration Form
│       ├── Security Settings Form
│       └── Backup & Recovery Section
└──  modals
    ├── Add User Dialog
    └── User Details Dialog
```

---

### **Module #9: Reports & Analytics**
📄 **File Path:** `app/dashboard/reports/page.tsx`
🗂️ **Component Dependencies:** `card.tsx`, `client-button.tsx`, `badge.tsx`, `label.tsx`, `tabs.tsx`, `select.tsx`, `calendar.tsx`, `popover.tsx`, `chart.tsx`, `recharts` (BarChart, LineChart, PieChart), `lucide-react` (various icons), `dashboard-layout.tsx`

🎯 **Purpose**
To provide users with a powerful and flexible reporting tool to generate, view, and export comprehensive reports on their performance, earnings, and other key metrics.

🧭 **Top-Level Tabs**
| Tab Name | Description |
| :--- | :--- |
| **Overview** | A high-level dashboard with key metrics and charts. |
| **Earnings** | A detailed analysis of earnings performance over time. |
| **Performance** | A breakdown of key performance indicators. |
| **Firms** | A comparison of performance across different IA firms. |
| **Territory** | A performance breakdown by geographic territory. |

🔧 **Core Features & Functionality**

✅ **Report Filters**
*   A dedicated card for filtering reports by time period, IA firm, and a custom date range.
*   Includes an "Advanced Filters" button for more granular control.
*   UI: `card.tsx`, `select.tsx`, `calendar.tsx`, `popover.tsx`, `client-button.tsx`

✅ **Overview Tab**
*   **Key Metrics Cards:** Displays total earnings, total claims, average per claim, and active firms.
*   **Performance Metrics Cards:** Shows metrics like average completion time, client satisfaction, accuracy rate, and bonus earnings.
*   **Charts:** Includes a monthly earnings trend chart and a claim types distribution pie chart.
*   UI: `card.tsx`, `recharts`

✅ **Earnings Tab**
*   **Earnings Analysis Chart:** A bar chart showing monthly earnings.
*   **Highlight Cards:** Cards for highest earning month, average monthly earnings, and growth rate.
*   UI: `card.tsx`, `recharts`

✅ **Performance Tab**
*   **Performance Metrics Cards:** A detailed view of performance metrics with trend indicators.
*   **Performance Trends:** A section to track key performance indicators over time.
*   UI: `card.tsx`

✅ **Firms Tab**
*   **Firm Performance Comparison:** A list comparing performance across different firms, including earnings, average rating, efficiency, and average per claim.
*   UI: `card.tsx`, `badge.tsx`

✅ **Territory Tab**
*   **Territory Performance:** A breakdown of performance by state, showing total claims, earnings, and average per claim.
*   UI: `card.tsx`, `badge.tsx`

🧠 **Intelligent Features**
*   **Trend Indicators:** The UI uses icons and colors to indicate positive or negative trends in performance metrics.
*   **Data Visualization:** The page uses various charts to provide a clear and intuitive understanding of the data.

🎛️ **Customization Options**
*   **Flexible Filtering:** Users can generate reports for specific time periods and firms.
*   **Exporting:** Reports can be exported for offline analysis or record-keeping.

🔐 **Access & Permissions**
*   Users can only generate reports based on their own data.

🤝 **System Integrations**
*   The page is wrapped in a `DashboardLayout`.
*   It uses the `recharts` library for data visualization.

📱 **Mobile Adaptability**
*   The layout is responsive, with grids that adapt to different screen sizes.
*   The tab labels are shortened on smaller screens.

📐 **Visual Layout Components (UI Map)**
```markdown
📂 Page Layout Structure
├── 🔼 Header
│   ├── Page Title and Description
│   └── Action Buttons (Refresh, Share, Export)
├── 🔍 Report Filters
├── 🗂️ Main Report Tabs
│   ├── Overview Tab
│   ├── Earnings Tab
│   ├── Performance Tab
│   ├── Firms Tab
│   └── Territory Tab
```

---

### **Module #11: Support Center**
📄 **File Path:** `app/dashboard/support/page.tsx`
🗂️ **Component Dependencies:** `card.tsx`, `client-button.tsx`, `badge.tsx`, `input.tsx`, `label.tsx`, `textarea.tsx`, `select.tsx`, `tabs.tsx`, `dialog.tsx`, `lucide-react` (various icons), `dashboard-layout.tsx`

🎯 **Purpose**
To provide a comprehensive support hub where users can create and manage support tickets, access a knowledge base for self-help, and find contact information for the support team.

🧭 **Top-Level Tabs**
| Tab Name | Description |
| :--- | :--- |
| **My Tickets** | View and manage all your support tickets. |
| **Knowledge Base** | A collection of articles and guides to help you with common issues. |
| **Contact Us** | Information on how to contact the support team directly. |

🔧 **Core Features & Functionality**

✅ **My Tickets Tab**
*   **New Ticket Dialog:** A dialog for creating a new support ticket with fields for category, priority, subject, and description.
*   **Tickets List:** A list of all support tickets, showing the ticket number, subject, category, priority, and status.
*   **Ticket Details:** A detailed view of a selected ticket, showing the conversation history with the support team and a form to send a new message.
*   UI: `card.tsx`, `dialog.tsx`, `input.tsx`, `label.tsx`, `textarea.tsx`, `select.tsx`, `badge.tsx`, `client-button.tsx`

✅ **Knowledge Base Tab**
*   A collection of articles organized into categories like "Getting Started," "Common Issues," and "Billing & Payments."
*   Each article is a link to a more detailed guide.
*   UI: `card.tsx`

✅ **Contact Us Tab**
*   **Contact Information:** Displays email and phone support details, along with business hours.
*   **Emergency Contact:** Provides an emergency hotline for critical issues.
*   UI: `card.tsx`

🧠 **Intelligent Features**
*   **Dynamic Status and Priority Coloring:** The UI uses different colors to represent the status and priority of support tickets, making them easy to track.

🎛️ **Customization Options**
*   Users can filter their support tickets to find specific issues.

🔐 **Access & Permissions**
*   Users can only view and manage their own support tickets.

🤝 **System Integrations**
*   The page is wrapped in a `DashboardLayout`.

📱 **Mobile Adaptability**
*   The layout is responsive, with grids that adapt to different screen sizes.

📐 **Visual Layout Components (UI Map)**
```markdown
📂 Page Layout Structure
├── 🔼 Header
│   ├── Page Title and Description
│   └── New Ticket Button
├── 🗂️ Main Support Tabs
│   ├── My Tickets Tab
│   │   ├── Tickets List
│   │   └── Ticket Details
│   ├── Knowledge Base Tab
│   └── Contact Us Tab
└──  modals































































-----------------------------------------------------------------------------------------------



