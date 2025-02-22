import React, { useState } from 'react';

const Terminal = ({ onClose }: { onClose: () => void }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>(['Welcome to the portfolio terminal! Type "help" for commands.']);
  
  const commands = {
    help: 'Available commands: help, about, projects, contact, clear, exit',
    about: 'Hi! I\'m John Doe, a full-stack developer passionate about creating amazing web experiences.',
    projects: 'Navigating to projects section...',
    contact: 'Navigating to contact section...',
    clear: '',
    exit: 'Closing terminal...',
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setOutput([]);
      return;
    }
    
    if (trimmedCmd === 'exit') {
      setOutput([...output, `$ ${cmd}`, commands[trimmedCmd as keyof typeof commands]]);
      setTimeout(onClose, 500);
      return;
    }

    const response = commands[trimmedCmd as keyof typeof commands] || 'Command not found. Type "help" for available commands.';
    setOutput([...output, `$ ${cmd}`, response]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="h-full p-4 font-mono text-green-400 overflow-y-auto">
      <div className="mb-4">
        {output.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <span className="mr-2">{'>'}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none"
          autoFocus
        />
      </form>
    </div>
  );
};

export default Terminal;