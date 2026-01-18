import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import ReactMarkdown from "react-markdown";


function App() {
  const [code, setCode] = useState("");
const [review, setReview] = useState("Your code review will appear here...");

async function codeReview() 
{
  setReview("Processing your code......")
  const response = await axios.post('http://localhost:3000/ai/get-Review',{code})
  console.log(response.data); 
  setReview(response.data)
}

  return (
    <>
    <div className="min-h-screen bg-black text-gray-200 flex flex-col md:flex-row p-4 gap-4">
{/* Left Container - Code Input */}
<div className="flex-1 bg-gray-900 rounded-2xl shadow-lg flex flex-col">
<div className="p-4 border-b border-gray-700">
<h2 className="text-lg font-semibold">Write Your Code</h2>
</div>


<div className="flex-1 p-4 overflow-y-auto">
<textarea
value={code}
onChange={(e) => setCode(e.target.value)}
placeholder="Paste or write your code here..."
className="w-full h-full bg-black text-gray-200 resize-none outline-none p-3 rounded-lg border border-gray-700 focus:border-gray-500"
/>
</div>


<div className="p-4 flex justify-end">
<button
onClick={codeReview}
className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition"
>
Review
</button>
</div>
</div>
{/* Right Container - Review Output */}
<div className="flex-1 bg-gray-900 rounded-2xl shadow-lg flex flex-col">
<div className="p-4 border-b border-gray-700">
<h2 className="text-lg font-semibold">Review</h2>
</div>


<div className="flex-1 p-4 overflow-y-auto">
<div className="prose prose-invert max-w-none bg-black p-4 rounded-lg border border-gray-700 overflow-x-auto">
  <ReactMarkdown>{review}</ReactMarkdown>
</div>
</div>
</div>
</div>
      
    </>
  )
}

export default App
