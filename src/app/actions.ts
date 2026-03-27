'use server';

import { query } from '../lib/db';

export async function getProperties() {
  const properties = await query('SELECT * FROM properties LIMIT 10');
  return properties;
}

export async function getProfessionals() {
  const professionals = await query('SELECT * FROM professionals LIMIT 10');
  return professionals;
}

export async function getProjects() {
  const projects = await query('SELECT * FROM projects LIMIT 10');
  return projects;
}

export async function getNotifications() {
  const notifications = await query('SELECT * FROM notifications ORDER BY id DESC LIMIT 5');
  return notifications;
}
