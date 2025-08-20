import { useState } from 'react';

export const useChat = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I\'m here to answer questions about Abdullah. What would you like to know?' }
  ]);

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('experience') || lowerInput.includes('work')) {
      return 'I\'m a fresher in web development with a strong foundation in React, JavaScript, and modern web technologies. I\'ve built several personal projects to showcase my skills.';
    } else if (lowerInput.includes('skills') || lowerInput.includes('technologies')) {
      return 'My main skills include ReactJS (90%), Tailwind CSS (85%), JavaScript (80%), Node.js (70%), and Flask (70%). I\'m constantly learning and improving.';
    } else if (lowerInput.includes('projects') || lowerInput.includes('work')) {
      return 'I\'ve built several projects including a Crypto Prices tracker, Mechanic Service App, Gym Project, and DataTrain Visualization. You can see them in the projects section!';
    } else if (lowerInput.includes('contact') || lowerInput.includes('email')) {
      return 'You can reach me at abdullahrajpoot8776@gmail.com or connect with me on LinkedIn and GitHub. I\'m always open to new opportunities and collaborations!';
    } else if (lowerInput.includes('education') || lowerInput.includes('degree')) {
      return 'I\'m passionate about web development and have been learning through online resources, documentation, and building projects. I believe in continuous learning and practical application.';
    } else {
      return 'That\'s an interesting question! I\'m Abdullah, a creative developer passionate about building modern web applications. Feel free to ask me about my skills, projects, or experience.';
    }
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
    }, 1000);

    setUserInput('');
  };

  return {
    userInput,
    setUserInput,
    messages,
    handleChatSubmit
  };
};
