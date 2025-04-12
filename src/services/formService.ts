
const API_HOST = "https://data.cif-cg.org";

// Interface pour la demande de donation
export interface DonationRequest {
  nom: string;
  prenom: string;
  adresse_email: string;
  telephone: string;
  message: string;
}

// Interface pour la demande d'adhésion
export interface MembershipRequest {
  nom: string;
  prenom: string;
  adresse_email: string;
  telephone: string;
}

// Interface pour le formulaire de contact
export interface ContactRequest {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  message: string;
}

// Fonction pour envoyer une demande de donation
export const submitDonation = async (donationData: DonationRequest): Promise<any> => {
  try {
    const response = await fetch(`${API_HOST}/api/donation/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donationData),
    });
    
    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi de la demande de donation");
    }
    
    return response.json();
  } catch (error) {
    console.error("Erreur lors de la soumission de la donation:", error);
    throw error;
  }
};

// Fonction pour envoyer une demande d'adhésion
export const submitMembership = async (membershipData: MembershipRequest): Promise<any> => {
  try {
    const response = await fetch(`${API_HOST}/api/adhesion/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(membershipData),
    });
    
    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi de la demande d'adhésion");
    }
    
    return response.json();
  } catch (error) {
    console.error("Erreur lors de la soumission de l'adhésion:", error);
    throw error;
  }
};

// Fonction pour envoyer un message via le formulaire de contact
export const submitContactForm = async (contactData: ContactRequest): Promise<any> => {
  try {
    const response = await fetch(`${API_HOST}/api/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    
    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi du message de contact");
    }
    
    return response.json();
  } catch (error) {
    console.error("Erreur lors de la soumission du formulaire de contact:", error);
    throw error;
  }
};
