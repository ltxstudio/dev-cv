# Dev CV

This is a personal portfolio website built with React, Tailwind CSS, and some modern UI/UX techniques. It features smooth animations, responsive design, and includes a contact form to get in touch with me.

## Features

- **Responsive Design**: The website is designed to look great on both mobile and desktop devices.
- **Interactive Animations**: Smooth animations using `framer-motion` to make the user experience engaging.
- **Contact Form**: A fully functional contact form using `react-hook-form` with validation.
- **GitHub Projects Integration**: Showcases your GitHub projects dynamically.
- **Modern UI**: Styled using Tailwind CSS for a clean, minimal, and modern look.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the components.
- **Framer Motion**: A library for creating animations in React.
- **React Hook Form**: A library for managing form validation and handling form submissions.
- **React Icons**: A library for including customizable icons in the project.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have **Node.js** installed on your machine.
- You have a **GitHub** account (for displaying your GitHub projects).

## Installation

Follow the steps below to run this project locally:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/ltxstudio/dev-cv
   ```

2. Navigate into the project directory:
   ```bash
   cd dev-cv
   ```

3. Install the required dependencies using npm or yarn:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

   This will start the development server and you can view the website in your browser by navigating to `http://localhost:3000`.

## Project Structure

```bash
├── public/
│   ├── index.html           # HTML template
├── src/
│   ├── components/          # React components (e.g., Header, Footer, Contact form)
│   ├── App.js               # Main React component
│   ├── index.js             # Entry point of the app
│   ├── styles/              # Tailwind CSS configuration
├── tailwind.config.js       # Tailwind CSS configuration file
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Contact Form

The contact form is built using **react-hook-form** and includes basic validation. It also has smooth animations using **framer-motion**. The form fields include:

- **Name**: Input field for the user's name.
- **Email**: Input field for the user's email address.
- **Message**: Textarea field for the user's message.

### Example Usage

To make the form functional, you can integrate it with an email API or backend service to handle form submissions. By default, it just logs the form data to the console.

## Customizing the Website

You can customize the website by making the following changes:

1. **Header Section**: Modify the text, social links, and add a profile picture in the `Header.js` component.
2. **Projects Section**: Integrate your GitHub API in the `Projects.js` component to display your projects dynamically.
3. **Contact Form**: Change the form action to send form data to your email or another endpoint.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- **John Doe** – [johndoe](https://github.com/ltxstudio)
