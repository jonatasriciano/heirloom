interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function submitContact(data: ContactData): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (!res.ok) {
      return { success: false, error: json.error || 'Failed to submit' };
    }

    return { success: true };
  } catch {
    return { success: false, error: 'Network error' };
  }
}
