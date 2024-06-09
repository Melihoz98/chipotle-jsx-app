import React from 'react';
import './Frokost.css';

const FrokostMenu = ({ closeModal }) => (
    <div className='bgBlue'>
        <button className="close" onClick={closeModal}>&times;</button>
        
        <div className="menu-section">
        <h1>Serveres (11-16)</h1>
            <h1>FORRETTER</h1>
            <div className="menu-item">
                <h2>NACHOS <span className="price">79,-</span></h2>
                <p>Ovnbagte og ostegratinerede torillachips. Serveres med jalapenos, creme fraiche, salsa & guacamole. Tilkøb af ekstra kylling 30,-</p>
            </div>
            <div className="menu-item">
                <h2>QUASADILLAS <span className="price">89,-</span></h2>
                <p>Stor hvedemelstortilla fyldt med kylling og ost, herefter ovnbagt. Serveres med creme fraiche & salsa.</p>
            </div>
            <div className="menu-item">
                <h2>TEX MEX SNACKKURV <span className="price">89,-</span></h2>
                <p>Paneret jalapenos fyldt med cheddarost, løgringe, mozzarellasticks og paneret kylling. Serveres med BBQ sauce eller chili mayo.</p>
            </div>
            <div className="menu-item">
                <h2>TIGERREJER <span className="price">99,-</span></h2>
                <p>Kæmpe rejer, champignon, løg, hvidløg, peberfrugt, avocado og tomat i chili sauce. Serveres i jernpande med brød til.</p>
            </div>
            <div className="menu-item">
                <h2>HVIDLØGSBRØD UDEN/MED OST <span className="price">59/69,-</span></h2>
                <p>Hvedemelstortilla fyldt med hvidløg og ost, bagt i ovnen.</p>
            </div>
        </div>
        
        <div className="menu-section">
        
            <h1>HOVEDRETTER</h1>
            <div className="menu-item">
                <h2>BURRITOS DE CARNE ASADA <span className="price">199,-</span></h2>
                <p>Kæmpe hvedemelstortilla fyldt med grillet oksekød, champignon, løg, peberfrugt, cajun sauce og gratineret ost. Serveres med salat, jalapenos, guacamole, salsa, creme fraiche og pommes frites.</p>
            </div>
            <div className="menu-item">
                <h2>BURRITOS DE POLLO <span className="price">189,-</span></h2>
                <p>Kæmpe hvedemelstortilla fyldt med kylling, champignon, løg, peberfrugt, BBQ sauce og gratineret ost. Serveres med salat, jalapenos, guacamole, salsa, creme fraiche og pommes frites.</p>
            </div>
            <div className="menu-item">
                <h2>FAJITA DE CARNE <span className="price">209,-</span></h2>
                <p>Saftige oksekødsstrimler i mexicansk sauce med peberfrugt, persille, løg, champignon og hvidløg. Serveres på jernpande med salat, salsa, guacamole, creme fraiche, jalapenos, ost og tortilla.</p>
            </div>
            <div className="menu-item">
                <h2>FAJITA DE CAMARÓN <span className="price">219,-</span></h2>
                <p>Kæmpe rejer med avocado, sauteret i mexikansk chilisauce med peberfrugt, persille, løg, champignon og hvidløg. Serveres på jernpande, med salat, salsa, guacamole, creme fraiche, jalapenos, ost og tortilla.</p>
            </div>
            <div className="menu-item">
                <h2>FAJITA DE POLLO <span className="price">189,-</span></h2>
                <p>Kyllingestrimler i mexicansk sauce med peberfrugt, persille, løg, champignon og hvidløg. Serveres på jernpande med salat, salsa, guacamole, creme fraiche, jalapenos, ost og tortilla.</p>
            </div>
        </div>
        
        <div className="menu-section">
            <h1>SALAT</h1>
            <div className="menu-item">
                <h2>TACO SALAT <span className="price">179,-</span></h2>
                <p>Oksekøds- og kyllingestrimler, salat, peberfrugt, løg, persille, champignon, cherrytomater og ost. Serveres med tortillachips, guacamole, jalapenos, salsa og creme fraiche.</p>
            </div>
            <div className="menu-item">
                <h2>TIGERREJE SALAT <span className="price">169,-</span></h2>
                <p>Tigerrejer, salat, avocado, champignon, løg, hvidløg, peberfrugt, persille, cherrytomater og hvidløgsdressing.</p>
            </div>
        </div>
        
        <div className="menu-section">
            <h1>DESSERTER</h1>
            <div className="menu-item">
                <h2>CHURROS <span className="price">99,-</span></h2>
                <p>Serveres med vaniljeis, flormelis og chokoladesauce.</p>
            </div>
            <div className="menu-item">
                <h2>Jordbær med marengs og bourbon is med frugt <span className="price">69,-</span></h2>
            </div>
            <div className="menu-item">
                <h2>3 KUGLER IS <span className="price">69,-</span></h2>
                <p>Serveres med frisk frugt, flødeskum & chokoladesovs.</p>
            </div>
        </div>
        
        <div className="menu-section">
            <h1>FROKOST BØFFER</h1>
            <p>VÆLG STEGNING: Rød, medium/rød, Medium, Medium/gennemstegt eller gennemstegt</p>
            <div className="menu-item">
                <h2>OKSEFILET <span className="price">149,-</span></h2>
                <p>150g. oksefilet, serveres med garniture, valgfri kartoffel & valgfri sauce.</p>
            </div>
            <div className="menu-item">
                <h2>OKSEFILET MED FEDTKANT <span className="price">149,-</span></h2>
                <p>180g. oksefilet, serveres med garniture, valgfri kartoffel & valgfri sauce.</p>
            </div>
            <div className="menu-item">
                <h2>OKSEMØRBRAD <span className="price">169,-</span></h2>
                <p>180g. oksemørbrad, serveres med garniture, valgfri kartoffel & valgfri sauce.</p>
            </div>
            <div className="menu-item">
                <h2>RIBEYE <span className="price">249,-</span></h2>
                <p>200g. kornopfodret ribeye fra Uruguay serveres med garniture, kartoffel & valgfri sauce.</p>
            </div>
            <div className="menu-item">
                <h2>PLANKEBØF OKSEFILET <span className="price">169,-</span></h2>
                <p>180g. oksefilet skåret af Uruguay, serveres med krydret kartoffelmos, garniture & valgfri sauce.</p>
            </div>
            <div className="menu-item">
                <h2>PLANKEBØF OKSEMØRBRAD <span className="price">179,-</span></h2>
                <p>180g. oksemørbrad skåret af Uruguay, serveres med krydret kartoffelmos, garniture & valgfri sauce.</p>
            </div>
            <p>VÆLG MELLEM: bearnaise, champignon, peber, whiskey eller rødvinssauce. Pommes frites eller små stegte kartofler.</p>
            <div className="menu-item">
                <h2>OVNBAGT LAKS <span className="price">169,-</span></h2>
                <p>Serveres med dagens garniture, grønne asparges, citron, hvidløgssmør og dagens kartoffel.</p>
            </div>
            <div className="menu-item">
                <h2>SPARERIBS</h2>
                <p>Serveres med BBQ glaserede spareribs med kartofler BBQ sauce.</p>
                <p>600g. <span className="price">149,-</span> 1200g. <span className="price">179,-</span></p>
            </div>
            <div className="menu-item">
                <h2>TACOS <span className="price">159,-</span></h2>
                <p>To slags lækre tacos. Én med lækkert oksekød, peberfrugt, løg og stærk cajun sauce. Én med saftig kylling, peberfrugt, løg og BBQ sauce. Serveres med guacamole, salsa, creme fraiche, ost, jalapenos, pommes frites og chili mayo.</p>
            </div>
            <div className="menu-item">
                <h2>CHILI CON CARNE (STÆRK) <span className="price">179,-</span></h2>
                <p>Den originale chili con carne fyldt med hakket oksekød, bønner, majs, peberfrugt, løg, hvidløg, chili, mexicanske krydderier i mexicansk tomatsauce. Serveres i varm gryde med persille, chips, tortilla, guacamole, creme fraiche, salsa, ost og jalapenos.</p>
            </div>
            <div className="menu-item">
                <h2>ENCHILADAS <span className="price">179,-</span></h2>
                <p>Tre små hvedemelstortillaer, med sauteret oksekød, gratineret ost og cajun sauce / sauteret kylling, ost og BBQ sauce / chili con carne, ost og chili sauce. Serveres med salat, jalapenos, guacamole, salsa, creme fraiche og pommes frites.</p>
            </div>
        </div>
        
        <div className="menu-section">
            <h1>BURGERE & SANDWICH</h1>
            <div className="menu-item">
                <h2>HAMBURGUESA DE POLLO CRUJIENTE <span className="price">149,-</span></h2>
                <p>Briochebolle smurt med chilimayo, paneret sprød kylling, guacamole, mexicansk salsa & pickles. Serveres med pommes frites & chili mayo.</p>
            </div>
            <div className="menu-item">
                <h2>HAMBURGUESA DE MEXICARNE <span className="price">149,-</span></h2>
                <p>Briochebolle smurt med chilimayo, saftig hakkebøf, guacamole, cheddarost, mexicansk salsa & pickles. Serveres med pommes frites & chili mayo.</p>
            </div>
            <div className="menu-item">
                <h2>MEXICANSK SANDWICH <span className="price">149,-</span></h2>
                <p>Briochebolle med oksetrimler gratineret med cheddarost, tomater, champignon, rødløg, mexicansk salsa, guacamole og jalapenos. Serveres med pommes frites & chili mayo.</p>
            </div>
        </div>
        
        <div className="menu-section">
            <h1>BØRNERETTER</h1>
            <div className="menu-item">
                <h2>BURRITOS PARA NINOS <span className="price">109,-</span></h2>
                <p>Hvedemelstortillas fyldt med sauteret oksekød og kylling, gratineret med ost. Serveres med BBQ sauce, pommes frites, guacamole og creme fraiche.</p>
            </div>
            <div className="menu-item">
                <h2>NUGGEST PARA NINOS <span className="price">89,-</span></h2>
                <p>5 stk. nuggets med pommes frites og ketchup.</p>
            </div>
            <div className="menu-item">
                <h2>HAMBURGUESA PARA NINOS <span className="price">119,-</span></h2>
                <p></p>
            </div>
        </div>
        
        <div className="menu-section">
            <h1>MEXICANSKE RETTER</h1>
            <div className="menu-item">
                <h2>CLASSIC BURGER <span className="price">139,-</span></h2>
                <p>Hjemmelavet hakket oksekød i briochebolle, med friske tomater, hjemmelavet BBQ-sauce, mayo, rødløg og salat. Serveres med pommes frites og mayo. Dobbelt bøf i burger, <span className="price">179,-</span></p>
            </div>
            <div className="menu-item">
                <h2>BACON BURGER <span className="price">149,-</span></h2>
                <p>Hjemmelavet hakket oksekød i briochebolle, med sprød bacon og cheddarost, mayo, rødløg, tomat og salat. Serveres med pommes frites og mayo. Dobbelt bøf i burger, <span className="price">189,-</span></p>
            </div>
            <div className="menu-item">
                <h2>RÖSTI BURGER <span className="price">159,-</span></h2>
                <p>Hakket oksekød i briochebolle, med stor rösti og cheddarost, bearnaisesauce, rødløg og salat. Serveres med pommes frites og chili mayo.</p>
            </div>
            <div className="menu-item">
                <h2>OCEAN BURGER <span className="price">149,-</span></h2>
                <p>Briochebolle med fiskefilet, rejer, friske tomater, rødløg, salat, asparges og rød dressing. Serveres med pommes frites og mayo.</p>
            </div>
            <div className="menu-item">
                <h2>LAKSE SANDWICH <span className="price">159,-</span></h2>
                <p>Laks, salat, pesto, rejer, avocado, tomat og løg. Serveres med pommes frites, citron og mayo.</p>
            </div>
        </div>
        
        <div className="menu-section">
            <h1>SALATBAR</h1>
            <div className="menu-item">
                <h2>SALATBAR HOVEDRET <span className="price">79,-</span></h2>
                <p>Spis så meget du har lyst til, inklusiv brød og smør.</p>
            </div>
            <div className="menu-item">
                <h2>SALATBAR TILBEHØR <span className="price">39,-</span></h2>
                <p>Som tilbehør til hovedret.</p>
            </div>
        </div>
    </div>
);

export default FrokostMenu;
