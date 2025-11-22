// Storage utility for saving form submissions
export interface FormSubmission {
  id: string;
  type: 'contact' | 'get-in-touch';
  name: string;
  email: string;
  company?: string;
  message?: string;
  topic?: string;
  urgency?: string;
  timestamp: string;
  status?: 'new' | 'contacted' | 'qualified' | 'converted';
}

const STORAGE_KEY = 'hybridpillars_submissions';

export const storage = {
  // Get all submissions
  getAll(): FormSubmission[] {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading from storage:', error);
      return [];
    }
  },

  // Save a new submission
  save(submission: Omit<FormSubmission, 'id' | 'timestamp'>): FormSubmission {
    const newSubmission: FormSubmission = {
      ...submission,
      id: Date.now().toString() + Math.random().toString(36).substring(2, 11),
      timestamp: new Date().toISOString(),
      status: 'new',
    };

    const all = this.getAll();
    all.push(newSubmission);
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    } catch (error) {
      console.error('Error saving to storage:', error);
    }

    return newSubmission;
  },

  // Update submission status
  updateStatus(id: string, status: FormSubmission['status']): void {
    const all = this.getAll();
    const index = all.findIndex(s => s.id === id);
    if (index !== -1) {
      all[index].status = status;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
      } catch (error) {
        console.error('Error updating storage:', error);
      }
    }
  },

  // Delete a submission
  delete(id: string): void {
    const all = this.getAll();
    const filtered = all.filter(s => s.id !== id);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    } catch (error) {
      console.error('Error deleting from storage:', error);
    }
  },

  // Clear all submissions
  clear(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  },
};

