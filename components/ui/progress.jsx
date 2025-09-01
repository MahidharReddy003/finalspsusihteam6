import React from 'react';

export function Progress({ value = 0, className = '', ...props }) {
  return (
    <div className={`w-full bg-slate-200 rounded-full h-2 ${className}`} {...props}>
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}
