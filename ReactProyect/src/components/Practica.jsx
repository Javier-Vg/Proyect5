import { useRef } from 'react';

const FocusComponent = () => {
    
        const divRef = useRef();
      
        const handleClick = () => {
          divRef.current.style.backgroundColor = 'red';
        };
      
        return (
          <div>
            <div ref={divRef}>This is a sample div</div>
            <button onClick={handleClick}>Change Color</button>
          </div>
        );
}

export default FocusComponent