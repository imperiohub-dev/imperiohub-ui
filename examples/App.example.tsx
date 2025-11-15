/**
 * Example App.tsx showing how to use the landing page template
 *
 * Copy this to your project and customize with your data
 */

import React, { useState } from 'react';
import { LandingPageTemplate } from './LandingPageTemplate';
import { lawyerLandingData } from './data/lawyer-landing';
import { Alert } from '../src/molecules/Alert';

// Import styles
import '../src/styles/index.scss';

function App() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  /**
   * Handle contact form submission
   */
  const handleContactSubmit = async (formData: Record<string, any>) => {
    console.log('Contact form submitted:', formData);

    try {
      // Example: Send to your API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessAlert(true);
        setTimeout(() => setShowSuccessAlert(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowErrorAlert(true);
      setTimeout(() => setShowErrorAlert(false), 5000);
    }
  };

  return (
    <div className="app">
      {/* Success/Error Alerts */}
      {showSuccessAlert && (
        <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
          <Alert variant="success">
            Thank you! We'll be in touch within 24 hours.
          </Alert>
        </div>
      )}

      {showErrorAlert && (
        <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
          <Alert variant="error">
            Something went wrong. Please try again or call us directly.
          </Alert>
        </div>
      )}

      {/* Landing Page */}
      <LandingPageTemplate
        data={lawyerLandingData}
        onContactSubmit={handleContactSubmit}
      />
    </div>
  );
}

export default App;

/**
 * Alternative: Using custom theme
 */
export function AppWithCustomTheme() {
  // You can inject a custom theme
  React.useEffect(() => {
    // Import theme utility
    import('../src/utils/theme').then(({ injectTheme }) => {
      injectTheme({
        colors: {
          primary: '#3b82f6',      // Custom blue
          secondary: '#10b981',    // Custom green
          accent: '#f59e0b',       // Custom orange
          background: '#ffffff',
          surface: '#f3f4f6',
          text: {
            primary: '#1f2937',
            secondary: '#6b7280',
            disabled: '#d1d5db',
          },
          error: '#ef4444',
          warning: '#f59e0b',
          success: '#10b981',
          info: '#3b82f6',
        },
        typography: {
          fontFamily: {
            heading: 'Playfair Display, serif',
            body: 'Inter, sans-serif',
          },
          fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
          },
          fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
          },
          lineHeight: {
            tight: 1.25,
            normal: 1.5,
            relaxed: 1.75,
          },
        },
        spacing: {
          xs: '0.25rem',
          sm: '0.5rem',
          md: '1rem',
          lg: '1.5rem',
          xl: '2rem',
          '2xl': '3rem',
          '3xl': '4rem',
          '4xl': '6rem',
        },
        borderRadius: {
          none: '0',
          sm: '0.25rem',
          md: '0.5rem',
          lg: '0.75rem',
          xl: '1rem',
          full: '9999px',
        },
        breakpoints: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      });
    });
  }, []);

  return <App />;
}

/**
 * Alternative: Using different data (Doctor example)
 */
export function DoctorLandingPage() {
  const [showAlert, setShowAlert] = useState(false);

  const handleContactSubmit = async (formData: Record<string, any>) => {
    console.log('Doctor appointment request:', formData);
    // Handle appointment booking
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  // Import doctor data
  const { doctorLandingData } = require('./data/doctor-landing');

  return (
    <>
      {showAlert && (
        <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
          <Alert variant="success">
            Appointment request received! We'll call you to confirm.
          </Alert>
        </div>
      )}

      <LandingPageTemplate
        data={doctorLandingData}
        onContactSubmit={handleContactSubmit}
      />
    </>
  );
}
