import React, { useState } from 'react';
import { Form } from '../components/Form';
import { Marquee } from './Marquee';
import { Responses } from './Responses';


interface Choices {
    finish_reason: string,
    index: number,
    logprobs: number | null,
    text: string
}

interface Response {
    choices: Choices[],
    created: number,
    id: string,
    model: string,
    object: string
    prompt: string
}

export const Homepage: React.FC = () => {

    const [responses, setResponses] = useState<Response[]>(() => {
        const saved = localStorage.getItem("openai_responses");
        let defaultValue:Response[] = [];

        if (typeof saved === 'string'){
            defaultValue = JSON.parse(saved);
        }
        return defaultValue;
    });
    

    const [text, setText] = useState(() => {
      const saved = localStorage.getItem("openai_text");
      let defaultValue = '';

      if (typeof saved === 'string'){
          defaultValue = JSON.parse(saved);
      }
      return defaultValue;
    });

    return (
     <div className='bg-gray-900 min-w-screen min-h-screen'>
        <div className='flex flex-wrap justify-center'>

          <div className='flex w-full h-40 justify-center items-center text-7xl  text-white font-black'>Fun with <span className='ml-2 text-cyan-400'> AI</span></div>

          <div className='flex w-screen justify-center'>
            <Marquee module='vehicles' setText={setText} />
          </div>

          <div className='flex w-screen justify-center'>
            <Marquee module='animals' setText={setText} />
          </div>

          <div className='flex w-3/4 justify-center'>
            <Form responses={responses} setResponses={setResponses} text={text} setText={setText} />
          </div>
          <div className='flex w-full justify-center'>
            <Responses responses={responses} />
          </div>
        </div>
      </div>
    )
}