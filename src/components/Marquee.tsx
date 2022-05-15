import React from 'react';
import { faker } from '@faker-js/faker';

interface MarqueeProps {
    module: string,
    setText: React.Dispatch<React.SetStateAction<string>>
}

export const Marquee: React.FC<MarqueeProps> = ({module, setText}) => {
    
    const randomItems: string[] = [];
    let prefix = '';
    for (let i = 0; i < 5; i++){
        switch(module){
            case 'vehicles': 
                randomItems.push(faker.vehicle.vehicle());
                prefix = 'Tell me about the';
                break;
            case 'animals': 
                randomItems.push(faker.animal.type());
                prefix = 'Tell me facts about';
                break;
            default:
                randomItems.push(faker.vehicle.vehicle());
                prefix = 'Tell me about the';
                break;
        }  
    }

    const updateText = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      localStorage.setItem("openai_text", JSON.stringify(`${prefix} ${event.currentTarget.innerText}`));
      setText(`${prefix} ${event.currentTarget.innerText}`)
    }
    return (
    <div className="relative flex overflow-x-hidden text-white font-medium">
        {/** First pass */}
        <div className="py-12 animate-marquee whitespace-nowrap">
            {randomItems.map(item => <span key={item} className="mx-4 hover:text-cyan-400"><a href="#" onClick={(event) => updateText(event)}>{item}</a></span> )}
        </div>

        {/** Second Pass */}
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            {randomItems.map(item => <span key={item} className="mx-4 hover:text-cyan-400"><a href="#" onClick={(event) => updateText(event)}>{item}</a></span> )}
        </div>
    </div>
    )
}