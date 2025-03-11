# Amigo Secreto (Secret Friend)

## Description
This is a Secret Friend (Secret Santa) application that allows users to organize gift exchanges. Participants are randomly assigned to give a gift to another participant without revealing the assignments until the appropriate time.

## Features
- User registration and login
- Create and manage Secret Friend events
- Invite participants via email
- Random and fair assignment of gift recipients
- Personalized wishlists for gift ideas
- Event date reminders
- Budget setting options

## Requirements
- PHP 7.4 or higher
- MySQL/MariaDB
- Composer
- Web server (Apache/Nginx)

## Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/amigo-secreto.git
cd amigo-secreto
```

2. Install dependencies
```bash
composer install
```

3. Configure your database
```bash
cp .env.example .env
# Edit .env file with your database credentials
```

4. Run migrations
```bash
php artisan migrate
```

5. Generate application key
```bash
php artisan key:generate
```

6. Start the development server
```bash
php artisan serve
```

## Usage
1. Register an account on the platform
2. Create a new Secret Friend event
3. Invite participants via email
4. Set event parameters (date, budget, etc.)
5. Once all participants have joined, the system will randomly assign gift recipients
6. Participants can view who they need to give a gift to by logging into their account

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
