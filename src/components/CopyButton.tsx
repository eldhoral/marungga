"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
}

export default function CopyButton({ textToCopy, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
      title="Salin Nomor Rekening"
      aria-label="Salin Nomor Rekening"
    >
      {copied ? (
        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
      ) : (
        <Copy className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
      )}
    </button>
  );
}
