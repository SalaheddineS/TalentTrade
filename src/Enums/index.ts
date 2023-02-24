import {ArtsAndHumanitiesSkill} from './ArtsandHumanities';
import { DiplomacySkill } from './Diplomacy';
import { GraphicDesignSkill } from './GraphicDesign';
import { HealthAndWellnessSkill } from './HealthandWellness'; 
import {ProgrammingSkill} from './Programming';
import {PublicSpeakingSkill} from './PublicSpeaking';
import {ScienceAndEngineeringSkill} from './ScienceandEngineering';
import { WebDevelopmentSkill } from './WebDevelopement';
import { WritingSkill } from './Writing';


const artsAndHumanitiesSkills = Object.values(ArtsAndHumanitiesSkill);
const diplomacySkills = Object.values(DiplomacySkill);
const graphicDesignSkills = Object.values(GraphicDesignSkill);
const healthAndWellnessSkills = Object.values(HealthAndWellnessSkill);
const programmingSkills = Object.values(ProgrammingSkill);
const publicSpeakingSkills = Object.values(PublicSpeakingSkill);
const scienceAndEngineeringSkills = Object.values(ScienceAndEngineeringSkill);
const webDevelopmentSkills = Object.values(WebDevelopmentSkill);
const writingSkills = Object.values(WritingSkill);

const skills = [
    ...artsAndHumanitiesSkills,
    ...diplomacySkills,
    ...graphicDesignSkills,
    ...healthAndWellnessSkills,
    ...programmingSkills,
    ...publicSpeakingSkills,
    ...scienceAndEngineeringSkills,
    ...webDevelopmentSkills,
    ...writingSkills
];

export default skills;