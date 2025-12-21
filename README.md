## Contact Form Feature

The Contact Form feature allows users to submit their contact details, which are then stored and displayed in the application. This feature is built using React and integrates with a backend API for data persistence.

### Steps to Use the Contact Form

1. **Navigate to the Contact Form Page**: Open the application and go to the Contact Form section.
2. **Fill Out the Form**: Enter your name, email, and message in the respective fields.
3. **Submit the Form**: Click the "Submit" button to send your details.
4. **View Submitted Contacts**: Navigate to the Contact List page to view all submitted contacts.

### Implementation Details

- **Frontend**: The form is implemented using React components (`ContactForm.jsx` and `ContactList.jsx`).
- **Styling**: The form is styled using CSS in `App.css`.
- **Backend**: The data is sent to the backend API (`api.js`) for storage and retrieval.
- **Validation**: Basic form validation is included to ensure all fields are filled out correctly.

### Future Enhancements

- Add more advanced validation (e.g., email format checking).
- Implement pagination for the Contact List.
- Add a search feature to filter contacts.
