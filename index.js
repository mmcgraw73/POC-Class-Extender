// Import stylesheets
import './style.css';

// class BaseAnimal {
//   constructor() {
//     this.base = true;
//   }
// }

class BaseReportModule {
  constructor() {
    this.base = true;
  }
}

// const creator = (allAnimalParts, animalPart) => animalPart(allAnimalParts);

const moduleCreator = (allReportModules, reportModule) =>
  reportModule(allReportModules);

// const extender = (...parts) => parts.reduce(creator, BaseAnimal);

const moduleExtender = (...modules) =>
  modules.reduce(moduleCreator, BaseReportModule);

// class Cat extends extender(body, head, tail, legs) {
//   constructor() {
//     super();
//     this.legs = 4;
//   }
// }

/**
 * 
{
   ="organization_id":"1876462879218078722",
   ="organization_name":"Alabama",
   ="organization_status":"Active",
   ="organization_type":"Division",
   "organization_street_address":null,
   "organization_city":null,
   "organization_region":null,
   "organization_postal_code":null,
   "organization_email":null,
   "organization_phone_number":null,

   "total_detractors":73,
   "total_passives":63,
   "total_promoters":1513,
   "total_surveys":4847,



   "theme_id":"6",
   "theme_name":"staff",
   "total_feedback":1649,
   "total_positive":1513,
   "total_negative":136,
   "sentiment":23,
   "previous_sentiment":23,
   "trend":"-1",
   "respondent_nps":87,
   "percent_mentioning":"34%",
   "negativeResponsesPercent":"8%",
   "positiveResponsesPercent":"92%",
   "percentages":[
      {
         "color":"#f06455",
         "width":"8%"
      },
      {
         "color":"#85c5a0",
         "width":"92%"
      }
   ],
   "url":"/organizations/1873359256678306817/reports/feedback/voice_of_the_customer/6/subsidiaries_for_feature/1876462879218078722",
   "absoluteTrend":"1"
}
 * @param general module with properties required in themes and theme modules
 * @param themes  data specific to default VOC report / aka bubble chart view
 * @param theme   data specific to 2nd level VOC Report once a specific theme 
  *               has been selected from either the bubble chart or the table
  *               on that page
 * @description   creating an instance of this module will give you all the
 *                report data 
 * 
 *                views: [THEMES, THEME]
 */
class VOC_REPORT extends moduleExtender(general, themesData, themeData) {
  constructor() {
    super();

    this.name = 'Voice of the Customer';

    this.themesData = [];
    this.themeData = [];
  }
}

// class RoadRunner extends extender(body, head, tail, legs, wings) {
//   constructor() {
//     super();
//     this.legs = 2;
//     this.wings = 2;
//   }
// }

const voc = new VOC_REPORT();
console.log(voc);
// const myRoadRunner = new RoadRunner();
//console.log(myRoadRunner);
// creating a new class from the functions below
// const myArms = new (arms(BaseAnimal))();
//console.log(myArms);

// function body(Base) {
//   class Body extends Base {
//     constructor() {
//       super();
//       this.body = true;
//     }
//   }
//   return Body;
// }

function general(Base) {
  class General extends Base {
    constructor() {
      super();
      this.general = true;
    }
  }
}

// function legs(Base) {
//   class Legs extends Base {
//     constructor(num = 4) {
//       super();
//       this.legs = num;
//     }
//   }
//   return Legs;
// }

function themesData(Base) {
  class Themes extends Base {
    constructor() {
      super();
      this.themes = true;
    }
  }
}

function themeData(Base) {
  class Theme extends Base {
    constructor() {
      super();
      this.theme = true;
    }
  }
}

// function arms(Base) {
//   class Arms extends Base {
//     constructor(num = 2) {
//       super();
//       this.arms = num;
//     }
//   }
//   return Arms;
// }

// function head(Base) {
//   class Head extends Base {
//     constructor() {
//       super();
//       this.head = true;
//     }
//   }
//   return Head;
// }

// function tail(Base) {
//   class Tail extends Base {
//     constructor() {
//       super();
//       this.tail = true;
//     }
//   }
//   return Tail;
// }

// function wings(Base) {
//   class Wings extends Base {
//     constructor() {
//       super();
//       this.wings = true;
//     }
//   }
//   return Wings;
// }
