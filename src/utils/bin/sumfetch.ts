import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          DONATE 
         @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
         @|                      @@          <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
  } else {
    return `
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@                @@@@@                           #@@@@@@
    @@@@@              @@@@,                                @@@@
    @@@@@@@@@@@       @@@@@      @@@@@@@       @@@@@@@       @@@
    @@@@@@@@@@      (@@@@@@          @@@     (@*     @@@@@@@@@@@
    @@@@@@@@@      @@@@@@@&          @@@      @@@@ @@@      /@@@
    @@@@@@@&                    %@@@@@@@/                  @@@@@
    @@@@@@                      @@@@@@@@@@@             @@@@@@@@
    
    The Zaibatsu Foods Company (ZFC) is in charge of overseeing
    and administering the global food supply.
    Zaibatsu Foods Co is one of the world's wealthiest and most powerful megacorporations, 
    controlling the world's gastronomic establishments and supermarkets.
    Atomic Automat is Zaibatsu Foods Co's major subsidiary,
    distinguished for its automated meal-making skills, popularising and essentially taking over most, if not all,
    fast food franchises by manufacturing high-quality yet very quick meals using automation,
    provided and sponsored by ZFC.

`;
  }
};

export default sumfetch;
