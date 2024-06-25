// Initialize Firebase
const firebaseConfig = {
    // Your Firebase configuration goes here
    apiKey: "AIzaSyCYr-v_PO32BboQ1wuitM_t-cvtCyhASXU",
    authDomain: "clinic-ms-e112f.firebaseapp.com",
    projectId: "clinic-ms-e112f",
    storageBucket: "clinic-ms-e112f.appspot.com",
    messagingSenderId: "527483927965",
    appId: "1:527483927965:web:3193e21a26bb6b1dca8374",
    measurementId: "G-CZM1DJT7PM"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Get a reference to the form
  const patientForm = document.getElementById('patient-form');
  
  // Add event listener for form submission
  patientForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    // Get the form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const illness = document.getElementById('illness').value;
    const feeling = document.getElementById('feeling').value;
    const medications = document.getElementById('medications').value;
    const history = document.getElementById('history').value;
  
    // Create a new patient object
    const patientData = {
      name,
      age,
      illness,
      feeling,
      medications,
      history
    };
  
    // Add the patient data to Firestore
    db.collection('patients').add(patientData)
      .then(() => {
        alert('Patient information submitted successfully!');
        patientForm.reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        alert('Error submitting patient information: ' + error.message);
      });
  });