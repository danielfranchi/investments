import React from 'react';

interface Title {
  text: string;
}

const Text = ({ text }: Title) => {
  return <span>{text}</span>;
};

export default Text;
