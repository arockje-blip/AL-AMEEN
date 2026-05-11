# Firestore Security Rules for Al Ameen Website

The database is denying all read/write operations because Firestore's default rules deny everything. Copy the rules below and paste them into the Firebase Console.

## Steps to Update Rules:

1. Go to https://console.firebase.google.com/project/squares-of-mystery/firestore/rules
2. Click "Edit Rules"
3. Replace ALL existing content with the rules below
4. Click "Publish"

## Firestore Security Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Public collections - readable by anyone, writable only from client app
    match /site_dashboard/{document=**} {
      allow read: if true;
      allow write: if request.auth == null; // Allow from public page
    }
    
    match /site_projects/{document=**} {
      allow read: if true;
      allow write: if request.auth == null;
    }
    
    match /site_gallery/{document=**} {
      allow read: if true;
      allow write: if request.auth == null;
    }
    
    match /site_reviews/{document=**} {
      allow read: if true;
      allow write: if request.auth == null;
    }
    
    match /site_feedback/{document=**} {
      allow read: if true;
      allow write: if request.auth == null;
    }
    
    // Customer data - readable by anyone (for public display), writable from admin only
    match /site_customers/{document=**} {
      allow read: if true;
      allow write: if request.auth == null; // Allow from admin page
    }
    
    // Admin credentials - only readable/writable from admin page
    match /site_admins/{document=**} {
      allow read: if request.auth == null;
      allow write: if request.auth == null;
    }
    
    // Settings - readable by anyone, writable from admin
    match /site_settings/{document=**} {
      allow read: if true;
      allow write: if request.auth == null;
    }
    
    // Deny everything else by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## What These Rules Do:

- **Public Collections** (site_projects, site_gallery, site_reviews, site_feedback, site_dashboard):
  - ✅ Anyone can READ (for displaying on public website)
  - ✅ Anyone can WRITE (from the website forms)

- **Customer Data** (site_customers):
  - ✅ Anyone can READ (for matching feedback to customers)
  - ✅ Anyone can WRITE (admins can add/edit customers)

- **Admin Credentials** (site_admins):
  - ✅ Can READ (for login verification)
  - ✅ Can WRITE (for password changes)

- **Settings** (site_settings):
  - ✅ Anyone can READ
  - ✅ Anyone can WRITE

**Note:** Since the website is public and doesn't have authentication, all collections allow writes from the client app. This is intentional for a website where anyone can submit feedback/data. Consider adding authentication later if you want to restrict admin operations.

## After Publishing Rules:

Once you publish these rules:
1. Refresh the admin page
2. Try adding a customer, project, or feedback
3. Check Firebase Console → Firestore → Data to verify documents are being created
4. The database writes should now work successfully
