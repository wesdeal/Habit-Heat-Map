## Tables

### Users
- id (UUID, primary key)
- email (string)

### Habits
- id (UUID)
- user_id (foreign key to Users.id)
- name (string)
- created_at (timestamp)

### HabitCompletions
- id (UUID)
- habit_id (foreign key to Habits.id)
- date_completed (string, e.g., "2025-06-11")
- completed (boolean)

