# ⚡ How to Set Up Instant Email Notifications

Since your website is static (no backend server), we use **Zapier** to act as the "brain" that sends emails instantly.

## 🛠️ The Architecture
1.  **Student Subscribes** → Saved to **Netlify Forms**.
2.  **You Post Content** → Updates **RSS Feed** (`feed.xml`).
3.  **Zapier** detects new RSS item → **Sends Email** to your list.

---

## 📋 Step 1: Deploy Your Site
Make sure your site is live on Netlify and you can see `https://yoursite.netlify.app/feed.xml`.

## 📋 Step 2: Set Up Zapier (The "Instant" Trigger)

1.  **Create a Zapier Account** (Free plan works for basics).
2.  **Create a New Zap**.

### **Trigger: New Content Posted**
*   **App**: "RSS by Zapier"
*   **Event**: "New Item in Feed"
*   **Feed URL**: `https://yoursite.netlify.app/feed.xml`
*   **Test**: It should find your latest event/announcement.

### **Action: Send Email**
*   **App**: "Gmail" (or "Outlook", or "Mailchimp" for nicer emails).
*   **Event**: "Send Email".
*   **To**: (See Step 3 below on how to get the list).
*   **Subject**: `New Update: {{Entry Title}}` (Select "Title" from RSS step).
*   **Body**:
    ```text
    Hi there,

    A new update has been posted on UGI Connect:
    {{Entry Title}}

    {{Entry Content}}

    Check it out here: {{Entry Link}}
    ```

---

## 📋 Step 3: Managing Subscribers (The List)

You need a place to store the student emails.

**Option A: Simple (Zapier Tables)**
1.  Create a second Zap:
    *   **Trigger**: "Netlify" -> "New Form Submission" (Select your "newsletter" form).
    *   **Action**: "Zapier Tables" -> "Create Record" (Save the email).
2.  Update your Email Zap (from Step 2) to send to **all emails** in that table.

**Option B: Mailchimp (Recommended for large lists)**
1.  Create a second Zap:
    *   **Trigger**: "Netlify" -> "New Form Submission".
    *   **Action**: "Mailchimp" -> "Add/Update Subscriber".
2.  In Step 2, use **Mailchimp** as the Action instead of Gmail.
    *   **Action**: "Create Campaign" -> "Send to Segment".

---

## ⏱️ How "Instant" is it?
*   **Zapier Free Plan**: Checks every **15 minutes**.
*   **Zapier Paid Plan**: Checks every **1-2 minutes**.

This is the fastest way to send notifications without building a complex backend server!
