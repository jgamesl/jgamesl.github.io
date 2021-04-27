import React, { useContext } from 'react';

import { languageOptions } from '../languages';
import { LanguageContext } from '../containers/Language';
import {Button, ButtonGroup} from '@material-ui/core/';

export default function LanguageSelectorText() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = e => userLanguageChange(e);
    
  console.log("las cosas");
  console.log(languageOptions);
  console.log(Object.entries(languageOptions));
  return (
      
    <li>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button onClick={() => { handleLanguageChange('en') }}>EN</Button>
            <Button onClick={() => { handleLanguageChange('es') }}>ES</Button>
            <Button onClick={() => { handleLanguageChange('de') }}>DE</Button>
        </ButtonGroup>
        {/* <Button color="primary">Primary</Button>
        <a href="https://github.com/jgamesl" target="_blank" rel="noopener noreferrer">EN  </a>
        <a href="https://github.com/jgamesl" target="_blank" rel="noopener noreferrer">ES  </a>
        <a href="https://github.com/jgamesl" target="_blank" rel="noopener noreferrer">DE</a> */}
    </li>
    // <select
    //   onChange={handleLanguageChange}
    //   value={userLanguage}
    // >
    //   {Object.entries(languageOptions).map(([id, name]) => (
    //     <option key={id} value={id}>{name}</option>
    //   ))}
    // </select>
 
  );
};