export const formatDateTime = (dateTime: Date) => {
  return dateTime.toLocaleString('cs-CZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
};


export async function fetchServices() {
    try {
      console.log('Fetching revenue data...');
      const data = await fetch('http://0.0.0.0:3000/api/services');
      console.log('Data fetch completed after 3 seconds.');
  
      return await data.json();
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchReservations() {
  try {
    console.log('Fetching revenue data...');
    const data = await fetch('http://0.0.0.0:3000/api/reservations');
    console.log('Data fetch completed after 3 seconds.');

    return await data.json();
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}