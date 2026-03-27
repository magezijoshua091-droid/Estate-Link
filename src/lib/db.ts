import mysql from 'mysql2/promise';

// Create a connection pool
// In a real environment, these would be environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'estatelink',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Helper function to execute queries with fallback to mock data
export async function query(sql: string, params: any[] = []) {
  try {
    const [rows] = await pool.execute(sql, params);
    return rows;
  } catch (error) {
    console.warn('Database connection failed, using mock data. Error:', error);
    
    // Fallback to mock data for demonstration purposes
    if (sql.includes('properties')) {
      return [
        { id: 1, title: 'Luxury Villa', price: 1500000, location: 'Beverly Hills', status: 'available', image_url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 2, title: 'Modern Apartment', price: 450000, location: 'Downtown', status: 'available', image_url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 3, title: 'Cozy Cottage', price: 320000, location: 'Suburbs', status: 'sold', image_url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
      ];
    }
    
    if (sql.includes('professionals')) {
      return [
        { id: 1, name: 'Sarah Jenkins', role: 'Architect', rating: 4.9, image_url: 'https://i.pravatar.cc/150?u=sarah' },
        { id: 2, name: 'Mike Ross', role: 'Contractor', rating: 4.7, image_url: 'https://i.pravatar.cc/150?u=mike' },
        { id: 3, name: 'Elena Gilbert', role: 'Interior Designer', rating: 4.8, image_url: 'https://i.pravatar.cc/150?u=elena' }
      ];
    }

    if (sql.includes('projects')) {
      return [
        { id: 1, title: 'Downtown Skyscraper', status: 'in-progress', progress: 45, budget: 5000000, image_url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 2, title: 'Suburban Housing Complex', status: 'planning', progress: 10, budget: 2000000, image_url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 3, title: 'City Park Renovation', status: 'completed', progress: 100, budget: 800000, image_url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
      ];
    }

    if (sql.includes('notifications')) {
      return [
        { id: 1, message: 'New message from Sarah Jenkins', type: 'Message', read: false, created_at: new Date(Date.now() - 10 * 60000).toISOString() },
        { id: 2, message: 'Project "Downtown Skyscraper" updated', type: 'Project', read: false, created_at: new Date(Date.now() - 60 * 60000).toISOString() },
        { id: 3, message: 'Payment received for "City Park Renovation"', type: 'Payment', read: true, created_at: new Date(Date.now() - 120 * 60000).toISOString() }
      ];
    }

    return [];
  }
}

export default pool;
