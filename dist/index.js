(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.TextSummary = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "facets": {
  	"Friendliness": {
  		"Big5": "Extraversion",
  		"LowTerm": "Reserved",
  		"HighTerm": "Outgoing",
  		"LowDescription": "You are a private person and don't let many people in",
  		"HighDescription": "You make friends easily and feel comfortable around other people"
  	},
  	"Gregariousness": {
  		"Big5": "Extraversion",
  		"LowTerm": "Independent",
  		"HighTerm": "Sociable",
  		"LowDescription": "You have a strong desire to have time to yourself",
  		"HighDescription": "You enjoy being in the company of others"
  	},
  	"Assertiveness": {
  		"Big5": "Extraversion",
  		"LowTerm": "Demure",
  		"HighTerm": "Assertive",
  		"LowDescription": "You prefer to listen than to talk, especially in group situations",
  		"HighDescription": "You tend to speak up and take charge of situations, and you are comfortable leading groups"
  	},
  	"Activity-level": {
  		"Big5": "Extraversion",
  		"LowTerm": "Laid-back",
  		"HighTerm": "Energetic",
  		"LowDescription": "You appreciate a relaxed pace in life",
  		"HighDescription": "You enjoy a fast-paced, busy schedule with many activities"
  	},
  	"Excitement-seeking": {
  		"Big5": "Extraversion",
  		"LowTerm": "Calm-seeking",
  		"HighTerm": "Excitement-seeking",
  		"LowDescription": "You prefer activities that are quiet, calm, and safe",
  		"HighDescription": "You are excited by taking risks and feel bored without lots of action going on"
  	},
  	"Cheerfulness": {
  		"Big5": "Extraversion",
  		"LowTerm": "Solemn",
  		"HighTerm": "Cheerful",
  		"LowDescription": "You are generally serious and do not joke much",
  		"HighDescription": "You are a joyful person and share that joy with the world"
  	},
  	"Trust": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Cautious of others",
  		"HighTerm": "Trusting of others",
  		"LowDescription": "You are wary of other people's intentions and do not trust easily",
  		"HighDescription": "You believe the best in others and trust people easily"
  	},
  	"Cooperation": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Contrary",
  		"HighTerm": "Accommodating",
  		"LowDescription": "You do not shy away from contradicting others",
  		"HighDescription": "You are easy to please and try to avoid confrontation"
  	},
  	"Altruism": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Self-focused",
  		"HighTerm": "Altruistic",
  		"LowDescription": "You are more concerned with taking care of yourself than taking time for others",
  		"HighDescription": "You feel fulfilled when helping others, and will go out of your way to do so"
  	},
  	"Morality": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Compromising",
  		"HighTerm": "Uncompromising",
  		"LowDescription": "You are comfortable using every trick in the book to get what you want",
  		"HighDescription": "You think it is wrong to take advantage of others to get ahead"
  	},
  	"Modesty": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Proud",
  		"HighTerm": "Modest",
  		"LowDescription": "You hold yourself in high regard, satisfied with who you are",
  		"HighDescription": "You are uncomfortable being the center of attention"
  	},
  	"Sympathy": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Hardened",
  		"HighTerm": "Empathetic",
  		"LowDescription": "You think that people should generally rely more on themselves than on other people",
  		"HighDescription": "You feel what others feel and are compassionate towards them"
  	},
  	"Self-efficacy": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Self-doubting",
  		"HighTerm": "Self-assured",
  		"LowDescription": "You frequently doubt your ability to achieve your goals",
  		"HighDescription": "You feel you have the ability to succeed in the tasks you set out to do"
  	},
  	"Orderliness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Unstructured",
  		"HighTerm": "Organized",
  		"LowDescription": "You do not make a lot of time for organization in your daily life",
  		"HighDescription": "You feel a strong need for structure in your life"
  	},
  	"Dutifulness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Carefree",
  		"HighTerm": "Dutiful",
  		"LowDescription": "You do what you want, disregarding rules and obligations",
  		"HighDescription": "You take rules and obligations seriously, even when they're inconvenient"
  	},
  	"Achievement-striving": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Content",
  		"HighTerm": "Driven",
  		"LowDescription": "You are content with your level of accomplishment and do not feel the need to set ambitious goals",
  		"HighDescription": "You have high goals for yourself and work hard to achieve them"
  	},
  	"Self-discipline": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Intermittent",
  		"HighTerm": "Persistent",
  		"LowDescription": "You have a hard time sticking with difficult tasks for a long period of time",
  		"HighDescription": "You can tackle and stick with tough tasks"
  	},
  	"Cautiousness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Bold",
  		"HighTerm": "Deliberate",
  		"LowDescription": "You would rather take action immediately than spend time deliberating making a decision",
  		"HighDescription": "You carefully think through decisions before making them"
  	},
  	"Anxiety": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Self-assured",
  		"HighTerm": "Prone to worry",
  		"LowDescription": "You tend to feel calm and self-assured",
  		"HighDescription": "You tend to worry about things that might happen"
  	},
  	"Anger": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Mild-tempered",
  		"HighTerm": "Fiery",
  		"LowDescription": "It takes a lot to get you angry",
  		"HighDescription": "You have a fiery temper, especially when things do not go your way"
  	},
  	"Depression": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Content",
  		"HighTerm": "Melancholy",
  		"LowDescription": "You are generally comfortable with yourself as you are",
  		"HighDescription": "You think quite often about the things you are unhappy about"
  	},
  	"Self-consciousness": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Confident",
  		"HighTerm": "Self-conscious",
  		"LowDescription": "You are hard to embarrass and are self-confident most of the time",
  		"HighDescription": "You are sensitive about what others might be thinking about you"
  	},
  	"Immoderation": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Self-controlled",
  		"HighTerm": "Hedonistic",
  		"LowDescription": "You have control over your desires, which are not particularly intense",
  		"HighDescription": "You feel your desires strongly and are easily tempted by them"
  	},
  	"Vulnerability": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Calm under pressure",
  		"HighTerm": "Susceptible to stress",
  		"LowDescription": "You handle unexpected events calmly and effectively",
  		"HighDescription": "You are easily overwhelmed in stressful situations"
  	},
  	"Imagination": {
  		"Big5": "Openness",
  		"LowTerm": "Down-to-earth",
  		"HighTerm": "Imaginative",
  		"LowDescription": "You prefer facts over fantasy",
  		"HighDescription": "You have a wild imagination"
  	},
  	"Artistic-interests": {
  		"Big5": "Openness",
  		"LowTerm": "Unconcerned with art",
  		"HighTerm": "Appreciative of art",
  		"LowDescription": "You are less concerned with artistic or creative activities than most people who participated in our surveys",
  		"HighDescription": "You enjoy beauty and seek out creative experiences"
  	},
  	"Emotionality": {
  		"Big5": "Openness",
  		"LowTerm": "Dispassionate",
  		"HighTerm": "Emotionally aware",
  		"LowDescription": "You do not frequently think about or openly express your emotions",
  		"HighDescription": "You are aware of your feelings and how to express them"
  	},
  	"Adventurousness": {
  		"Big5": "Openness",
  		"LowTerm": "Consistent",
  		"HighTerm": "Adventurous",
  		"LowDescription": "You enjoy familiar routines and prefer not to deviate from them",
  		"HighDescription": "You are eager to experience new things"
  	},
  	"Intellect": {
  		"Big5": "Openness",
  		"LowTerm": "Concrete",
  		"HighTerm": "Philosophical",
  		"LowDescription": "You prefer dealing with the world as it is, rarely considering abstract ideas",
  		"HighDescription": "You are open to and intrigued by new ideas and love to explore them"
  	},
  	"Liberalism": {
  		"Big5": "Openness",
  		"LowTerm": "Respectful of authority",
  		"HighTerm": "Authority-challenging",
  		"LowDescription": "You prefer following with tradition in order to maintain a sense of stability",
  		"HighDescription": "You prefer to challenge authority and traditional values to help bring about positive changes"
  	}
  },
  "needs": {
      "Challenge": [
          "prestige",
          "competition",
          "glory"
      ],
      "Closeness": [
          "belongingness",
          "nostalgia",
          "intimacy"
      ],
      "Curiosity": [
          "discovery",
          "mastery",
          "gaining knowledge"
      ],
      "Excitement": [
          "revelry",
          "anticipation",
          "exhiliration"
      ],
      "Harmony": [
          "well-being",
          "courtesy",
          "politeness"
      ],
      "Ideal": [
          "sophistication",
          "spirituality",
          "superiority",
          "fulfillment"
      ],
      "Liberty": [
          "modernity",
          "expanding possibility",
          "escape",
          "spontaneity",
          "novelty"
      ],
      "Love": [
          "connectedness",
          "affinity"
      ],
      "Practicality": [
          "efficiency",
          "practicality",
          "high value",
          "convenience"
      ],
      "Self-expression": [
          "self-expression",
          "personal empowerment",
          "personal strength"
      ],
      "Stability": [
          "stability",
          "authenticity",
          "trustworthiness"
      ],
      "Structure": [
          "organization",
          "straightforwardness",
          "clarity",
          "reliability"
      ]
  },
  "phrases": {
    "You are %s": "You are %s",
    "You are %s and %s": "You are %s and %s",
    "You are %s, %s and %s": "You are %s, %s and %s",
    "And you are %s": "And you are %s",
    "You are relatively unconcerned with %s": "You are relatively unconcerned with %s",
    "You are relatively unconcerned with both %s and %s": "You are relatively unconcerned with both %s and %s",
    "You don't find %s to be particularly motivating for you": "You don't find %s to be particularly motivating for you",
    "You don't find either %s or %s to be particularly motivating for you": "You don't find either %s or %s to be particularly motivating for you",
    "You value both %s a bit": "You value both %s a bit",
    "You value both %s and %s a bit": "You value both %s and %s a bit",
    "You consider %s to guide a large part of what you do" : "You consider %s to guide a large part of what you do",
    "You consider both %s and %s to guide a large part of what you do" : "You consider both %s and %s to guide a large part of what you do",
    "And %s": "And %s",
    "You value %s a bit more": "You value %s a bit more",
    "Experiences that make you feel high %s are generally unappealing to you": "Experiences that make you feel high %s are generally unappealing to you",
    "Experiences that give a sense of %s hold some appeal to you": "Experiences that give a sense of %s hold some appeal to you",
    "You are motivated to seek out experiences that provide a strong feeling of %s": "You are motivated to seek out experiences that provide a strong feeling of %s",
    "Your choices are driven by a desire for %s" : "Your choices are driven by a desire for %s",
    "a bit %s": "a bit %s",
    "somewhat %s" : "somewhat %s",
    "can be perceived as %s": "can be perceived as %s"
  },
  "traits": {
      "Agreeableness_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "inconsiderate"
          },
          {
              "perceived_negatively": true,
              "word": "impolite"
          },
          {
              "perceived_negatively": true,
              "word": "distrustful"
          },
          {
              "perceived_negatively": true,
              "word": "uncooperative"
          },
          {
              "perceived_negatively": true,
              "word": "thoughtless"
          }
      ],
      "Agreeableness_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "strict"
          },
          {
              "perceived_negatively": false,
              "word": "rigid"
          },
          {
              "perceived_negatively": true,
              "word": "stern"
          }
      ],
      "Agreeableness_minus_Extraversion_minus": [
          {
              "perceived_negatively": true,
              "word": "cynical"
          },
          {
              "perceived_negatively": true,
              "word": "wary of others"
          },
          {
              "perceived_negatively": true,
              "word": "seclusive"
          },
          {
              "perceived_negatively": true,
              "word": "detached"
          },
          {
              "perceived_negatively": true,
              "word": "impersonal"
          },
          {
              "perceived_negatively": true,
              "word": "glum"
          }
      ],
      "Agreeableness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "bullheaded"
          },
          {
              "perceived_negatively": true,
              "word": "abrupt"
          },
          {
              "perceived_negatively": true,
              "word": "crude"
          },
          {
              "perceived_negatively": true,
              "word": "combative"
          },
          {
              "perceived_negatively": true,
              "word": "rough"
          },
          {
              "perceived_negatively": false,
              "word": "sly"
          },
          {
              "perceived_negatively": true,
              "word": "manipulative"
          },
          {
              "perceived_negatively": true,
              "word": "gruff"
          },
          {
              "perceived_negatively": true,
              "word": "devious"
          }
      ],
      "Agreeableness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": true,
              "word": "insensitive"
          },
          {
              "perceived_negatively": true,
              "word": "unaffectionate"
          },
          {
              "perceived_negatively": true,
              "word": "passionless"
          },
          {
              "perceived_negatively": true,
              "word": "unemotional"
          }
      ],
      "Agreeableness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": true,
              "word": "critical"
          },
          {
              "perceived_negatively": true,
              "word": "selfish"
          },
          {
              "perceived_negatively": true,
              "word": "ill-tempered"
          },
          {
              "perceived_negatively": true,
              "word": "antagonistic"
          },
          {
              "perceived_negatively": true,
              "word": "grumpy"
          },
          {
              "perceived_negatively": true,
              "word": "bitter"
          },
          {
              "perceived_negatively": true,
              "word": "disagreeable"
          },
          {
              "perceived_negatively": true,
              "word": "demanding"
          }
      ],
      "Agreeableness_minus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "coarse"
          },
          {
              "perceived_negatively": true,
              "word": "tactless"
          },
          {
              "perceived_negatively": true,
              "word": "curt"
          },
          {
              "perceived_negatively": true,
              "word": "narrow-minded"
          },
          {
              "perceived_negatively": true,
              "word": "callous"
          },
          {
              "perceived_negatively": true,
              "word": "ruthless"
          },
          {
              "perceived_negatively": true,
              "word": "uncharitable"
          },
          {
              "perceived_negatively": true,
              "word": "vindictive"
          }
      ],
      "Agreeableness_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "shrewd"
          },
          {
              "perceived_negatively": false,
              "word": "eccentric"
          },
          {
              "perceived_negatively": false,
              "word": "individualistic"
          }
      ],
      "Agreeableness_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "unpretentious"
          },
          {
              "perceived_negatively": false,
              "word": "self-effacing"
          }
      ],
      "Agreeableness_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "helpful"
          },
          {
              "perceived_negatively": false,
              "word": "cooperative"
          },
          {
              "perceived_negatively": false,
              "word": "considerate"
          },
          {
              "perceived_negatively": false,
              "word": "respectful"
          },
          {
              "perceived_negatively": false,
              "word": "polite"
          },
          {
              "perceived_negatively": false,
              "word": "reasonable"
          },
          {
              "perceived_negatively": false,
              "word": "courteous"
          },
          {
              "perceived_negatively": false,
              "word": "thoughtful"
          },
          {
              "perceived_negatively": false,
              "word": "loyal"
          },
          {
              "perceived_negatively": false,
              "word": "moral"
          }
      ],
      "Agreeableness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "soft-hearted"
          },
          {
              "perceived_negatively": false,
              "word": "agreeable"
          },
          {
              "perceived_negatively": false,
              "word": "obliging"
          },
          {
              "perceived_negatively": false,
              "word": "humble"
          },
          {
              "perceived_negatively": true,
              "word": "lenient"
          }
      ],
      "Agreeableness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "effervescent"
          },
          {
              "perceived_negatively": false,
              "word": "happy"
          },
          {
              "perceived_negatively": false,
              "word": "friendly"
          },
          {
              "perceived_negatively": false,
              "word": "merry"
          },
          {
              "perceived_negatively": false,
              "word": "jovial"
          },
          {
              "perceived_negatively": false,
              "word": "humorous"
          }
      ],
      "Agreeableness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "generous"
          },
          {
              "perceived_negatively": false,
              "word": "pleasant"
          },
          {
              "perceived_negatively": false,
              "word": "tolerant"
          },
          {
              "perceived_negatively": false,
              "word": "peaceful"
          },
          {
              "perceived_negatively": false,
              "word": "flexible"
          },
          {
              "perceived_negatively": false,
              "word": "easy-going"
          },
          {
              "perceived_negatively": false,
              "word": "fair"
          },
          {
              "perceived_negatively": false,
              "word": "charitable"
          },
          {
              "perceived_negatively": false,
              "word": "trustful"
          }
      ],
      "Agreeableness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "sentimental"
          },
          {
              "perceived_negatively": false,
              "word": "affectionate"
          },
          {
              "perceived_negatively": false,
              "word": "sensitive"
          },
          {
              "perceived_negatively": false,
              "word": "soft"
          },
          {
              "perceived_negatively": false,
              "word": "passionate"
          },
          {
              "perceived_negatively": false,
              "word": "romantic"
          }
      ],
      "Agreeableness_plus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "dependent"
          },
          {
              "perceived_negatively": true,
              "word": "simple"
          }
      ],
      "Agreeableness_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "genial"
          },
          {
              "perceived_negatively": false,
              "word": "tactful"
          },
          {
              "perceived_negatively": false,
              "word": "diplomatic"
          },
          {
              "perceived_negatively": false,
              "word": "deep"
          },
          {
              "perceived_negatively": false,
              "word": "idealistic"
          }
      ],
      "Conscientiousness_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "rash"
          },
          {
              "perceived_negatively": true,
              "word": "uncooperative"
          },
          {
              "perceived_negatively": true,
              "word": "unreliable"
          },
          {
              "perceived_negatively": true,
              "word": "distrustful"
          },
          {
              "perceived_negatively": true,
              "word": "thoughtless"
          }
      ],
      "Conscientiousness_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "unpretentious"
          },
          {
              "perceived_negatively": false,
              "word": "self-effacing"
          }
      ],
      "Conscientiousness_minus_Extraversion_minus": [
          {
              "perceived_negatively": true,
              "word": "indecisive"
          },
          {
              "perceived_negatively": true,
              "word": "aimless"
          },
          {
              "perceived_negatively": false,
              "word": "wishy-washy"
          },
          {
              "perceived_negatively": false,
              "word": "noncommittal"
          },
          {
              "perceived_negatively": true,
              "word": "unambitious"
          }
      ],
      "Conscientiousness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "unruly"
          },
          {
              "perceived_negatively": false,
              "word": "boisterous"
          },
          {
              "perceived_negatively": true,
              "word": "reckless"
          },
          {
              "perceived_negatively": true,
              "word": "devil-may-care"
          },
          {
              "perceived_negatively": false,
              "word": "demonstrative"
          }
      ],
      "Conscientiousness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "informal"
          },
          {
              "perceived_negatively": false,
              "word": "low-key"
          }
      ],
      "Conscientiousness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": true,
              "word": "scatterbrained"
          },
          {
              "perceived_negatively": true,
              "word": "inconsistent"
          },
          {
              "perceived_negatively": true,
              "word": "erratic"
          },
          {
              "perceived_negatively": true,
              "word": "forgetful"
          },
          {
              "perceived_negatively": true,
              "word": "impulsive"
          },
          {
              "perceived_negatively": true,
              "word": "frivolous"
          }
      ],
      "Conscientiousness_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "foolhardy"
          },
          {
              "perceived_negatively": true,
              "word": "illogical"
          },
          {
              "perceived_negatively": true,
              "word": "immature"
          },
          {
              "perceived_negatively": true,
              "word": "haphazard"
          },
          {
              "perceived_negatively": false,
              "word": "lax"
          },
          {
              "perceived_negatively": true,
              "word": "flippant"
          }
      ],
      "Conscientiousness_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "unconventional"
          },
          {
              "perceived_negatively": false,
              "word": "quirky"
          }
      ],
      "Conscientiousness_plus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "stern"
          },
          {
              "perceived_negatively": false,
              "word": "strict"
          },
          {
              "perceived_negatively": false,
              "word": "rigid"
          }
      ],
      "Conscientiousness_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "dependable"
          },
          {
              "perceived_negatively": false,
              "word": "responsible"
          },
          {
              "perceived_negatively": false,
              "word": "reliable"
          },
          {
              "perceived_negatively": false,
              "word": "mannerly"
          },
          {
              "perceived_negatively": false,
              "word": "considerate"
          }
      ],
      "Conscientiousness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "cautious"
          },
          {
              "perceived_negatively": false,
              "word": "confident"
          },
          {
              "perceived_negatively": false,
              "word": "punctual"
          },
          {
              "perceived_negatively": false,
              "word": "formal"
          },
          {
              "perceived_negatively": false,
              "word": "thrifty"
          },
          {
              "perceived_negatively": false,
              "word": "principled"
          }
      ],
      "Conscientiousness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "ambitious"
          },
          {
              "perceived_negatively": false,
              "word": "alert"
          },
          {
              "perceived_negatively": false,
              "word": "firm"
          },
          {
              "perceived_negatively": false,
              "word": "purposeful"
          },
          {
              "perceived_negatively": false,
              "word": "competitive"
          }
      ],
      "Conscientiousness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "thorough"
          },
          {
              "perceived_negatively": false,
              "word": "steady"
          },
          {
              "perceived_negatively": false,
              "word": "consistent"
          },
          {
              "perceived_negatively": false,
              "word": "self-disciplined"
          },
          {
              "perceived_negatively": false,
              "word": "logical"
          },
          {
              "perceived_negatively": false,
              "word": "decisive"
          },
          {
              "perceived_negatively": false,
              "word": "controlled"
          },
          {
              "perceived_negatively": false,
              "word": "concise"
          }
      ],
      "Conscientiousness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "particular"
          },
          {
              "perceived_negatively": true,
              "word": "high-strung"
          }
      ],
      "Conscientiousness_plus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "traditional"
          },
          {
              "perceived_negatively": false,
              "word": "conventional"
          }
      ],
      "Conscientiousness_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "sophisticated"
          },
          {
              "perceived_negatively": false,
              "word": "perfectionistic"
          },
          {
              "perceived_negatively": false,
              "word": "industrious"
          },
          {
              "perceived_negatively": false,
              "word": "dignified"
          },
          {
              "perceived_negatively": false,
              "word": "refined"
          },
          {
              "perceived_negatively": false,
              "word": "cultured"
          },
          {
              "perceived_negatively": false,
              "word": "foresighted"
          }
      ],
      "Extraversion_minus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "skeptical"
          },
          {
              "perceived_negatively": false,
              "word": "wary of others"
          },
          {
              "perceived_negatively": true,
              "word": "seclusive"
          },
          {
              "perceived_negatively": true,
              "word": "uncommunicative"
          },
          {
              "perceived_negatively": true,
              "word": "unsociable"
          },
          {
              "perceived_negatively": true,
              "word": "glum"
          },
          {
              "perceived_negatively": true,
              "word": "detached"
          },
          {
              "perceived_negatively": false,
              "word": "aloof"
          }
      ],
      "Extraversion_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "unaggressive"
          },
          {
              "perceived_negatively": false,
              "word": "humble"
          },
          {
              "perceived_negatively": false,
              "word": "submissive"
          },
          {
              "perceived_negatively": false,
              "word": "timid"
          },
          {
              "perceived_negatively": false,
              "word": "compliant"
          },
          {
              "perceived_negatively": false,
              "word": "naïve"
          }
      ],
      "Extraversion_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "indirect"
          },
          {
              "perceived_negatively": true,
              "word": "unenergetic"
          },
          {
              "perceived_negatively": true,
              "word": "sluggish"
          },
          {
              "perceived_negatively": true,
              "word": "nonpersistent"
          },
          {
              "perceived_negatively": true,
              "word": "vague"
          }
      ],
      "Extraversion_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "restrained"
          },
          {
              "perceived_negatively": false,
              "word": "serious"
          },
          {
              "perceived_negatively": false,
              "word": "discreet"
          },
          {
              "perceived_negatively": false,
              "word": "cautious"
          },
          {
              "perceived_negatively": false,
              "word": "principled"
          }
      ],
      "Extraversion_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "tranquil"
          },
          {
              "perceived_negatively": false,
              "word": "sedate"
          },
          {
              "perceived_negatively": false,
              "word": "placid"
          },
          {
              "perceived_negatively": false,
              "word": "impartial"
          },
          {
              "perceived_negatively": false,
              "word": "unassuming"
          },
          {
              "perceived_negatively": false,
              "word": "acquiescent"
          }
      ],
      "Extraversion_minus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "guarded"
          },
          {
              "perceived_negatively": false,
              "word": "pessimistic"
          },
          {
              "perceived_negatively": false,
              "word": "secretive"
          },
          {
              "perceived_negatively": true,
              "word": "cowardly"
          },
          {
              "perceived_negatively": false,
              "word": "secretive"
          }
      ],
      "Extraversion_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "somber"
          },
          {
              "perceived_negatively": true,
              "word": "meek"
          },
          {
              "perceived_negatively": true,
              "word": "unadventurous"
          },
          {
              "perceived_negatively": false,
              "word": "passive"
          },
          {
              "perceived_negatively": true,
              "word": "apathetic"
          },
          {
              "perceived_negatively": false,
              "word": "docile"
          }
      ],
      "Extraversion_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "inner-directed"
          },
          {
              "perceived_negatively": false,
              "word": "introspective"
          },
          {
              "perceived_negatively": false,
              "word": "meditative"
          },
          {
              "perceived_negatively": false,
              "word": "contemplating"
          },
          {
              "perceived_negatively": false,
              "word": "self-examining"
          }
      ],
      "Extraversion_plus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "opinionated"
          },
          {
              "perceived_negatively": true,
              "word": "forceful"
          },
          {
              "perceived_negatively": true,
              "word": "domineering"
          },
          {
              "perceived_negatively": true,
              "word": "boastful"
          },
          {
              "perceived_negatively": true,
              "word": "bossy"
          },
          {
              "perceived_negatively": false,
              "word": "dominant"
          },
          {
              "perceived_negatively": false,
              "word": "cunning"
          }
      ],
      "Extraversion_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "social"
          },
          {
              "perceived_negatively": false,
              "word": "energetic"
          },
          {
              "perceived_negatively": false,
              "word": "enthusiastic"
          },
          {
              "perceived_negatively": false,
              "word": "communicative"
          },
          {
              "perceived_negatively": false,
              "word": "vibrant"
          },
          {
              "perceived_negatively": false,
              "word": "spirited"
          },
          {
              "perceived_negatively": false,
              "word": "magnetic"
          },
          {
              "perceived_negatively": false,
              "word": "zestful"
          }
      ],
      "Extraversion_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "boisterous"
          },
          {
              "perceived_negatively": false,
              "word": "mischievous"
          },
          {
              "perceived_negatively": false,
              "word": "exhibitionistic"
          },
          {
              "perceived_negatively": false,
              "word": "gregarious"
          },
          {
              "perceived_negatively": false,
              "word": "demonstrative"
          }
      ],
      "Extraversion_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "active"
          },
          {
              "perceived_negatively": false,
              "word": "competitive"
          },
          {
              "perceived_negatively": false,
              "word": "persistent"
          },
          {
              "perceived_negatively": false,
              "word": "ambitious"
          },
          {
              "perceived_negatively": false,
              "word": "purposeful"
          }
      ],
      "Extraversion_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "confident"
          },
          {
              "perceived_negatively": false,
              "word": "bold"
          },
          {
              "perceived_negatively": false,
              "word": "assured"
          },
          {
              "perceived_negatively": false,
              "word": "uninhibited"
          },
          {
              "perceived_negatively": false,
              "word": "courageous"
          },
          {
              "perceived_negatively": false,
              "word": "brave"
          },
          {
              "perceived_negatively": false,
              "word": "self-satisfied"
          },
          {
              "perceived_negatively": false,
              "word": "vigorous"
          },
          {
              "perceived_negatively": false,
              "word": "strong"
          }
      ],
      "Extraversion_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "explosive"
          },
          {
              "perceived_negatively": true,
              "word": "wordy"
          },
          {
              "perceived_negatively": false,
              "word": "extravagant"
          },
          {
              "perceived_negatively": true,
              "word": "volatile"
          },
          {
              "perceived_negatively": false,
              "word": "flirtatious"
          }
      ],
      "Extraversion_plus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "verbose"
          },
          {
              "perceived_negatively": true,
              "word": "unscrupulous"
          },
          {
              "perceived_negatively": true,
              "word": "pompous"
          }
      ],
      "Extraversion_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "expressive"
          },
          {
              "perceived_negatively": false,
              "word": "candid"
          },
          {
              "perceived_negatively": false,
              "word": "dramatic"
          },
          {
              "perceived_negatively": false,
              "word": "spontaneous"
          },
          {
              "perceived_negatively": false,
              "word": "witty"
          },
          {
              "perceived_negatively": false,
              "word": "opportunistic"
          },
          {
              "perceived_negatively": false,
              "word": "independent"
          }
      ],
      "Neuroticism_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "unemotional"
          },
          {
              "perceived_negatively": true,
              "word": "insensitive"
          },
          {
              "perceived_negatively": true,
              "word": "unaffectionate"
          },
          {
              "perceived_negatively": true,
              "word": "passionless"
          }
      ],
      "Neuroticism_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "patient"
          },
          {
              "perceived_negatively": false,
              "word": "relaxed"
          },
          {
              "perceived_negatively": false,
              "word": "undemanding"
          },
          {
              "perceived_negatively": false,
              "word": "down-to-earth"
          },
          {
              "perceived_negatively": false,
              "word": "optimistic"
          },
          {
              "perceived_negatively": false,
              "word": "conceitless"
          },
          {
              "perceived_negatively": false,
              "word": "uncritical"
          },
          {
              "perceived_negatively": false,
              "word": "unpretentious"
          }
      ],
      "Neuroticism_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "informal"
          },
          {
              "perceived_negatively": false,
              "word": "low-key"
          }
      ],
      "Neuroticism_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "rational"
          },
          {
              "perceived_negatively": false,
              "word": "objective"
          },
          {
              "perceived_negatively": false,
              "word": "steady"
          },
          {
              "perceived_negatively": false,
              "word": "logical"
          },
          {
              "perceived_negatively": false,
              "word": "decisive"
          },
          {
              "perceived_negatively": false,
              "word": "poised"
          },
          {
              "perceived_negatively": false,
              "word": "concise"
          },
          {
              "perceived_negatively": false,
              "word": "thorough"
          },
          {
              "perceived_negatively": false,
              "word": "economical"
          },
          {
              "perceived_negatively": false,
              "word": "self-disciplined"
          }
      ],
      "Neuroticism_minus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "unassuming"
          },
          {
              "perceived_negatively": true,
              "word": "unexcitable"
          },
          {
              "perceived_negatively": false,
              "word": "placid"
          },
          {
              "perceived_negatively": false,
              "word": "tranquil"
          }
      ],
      "Neuroticism_minus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "unselfconscious"
          },
          {
              "perceived_negatively": false,
              "word": "weariless"
          },
          {
              "perceived_negatively": false,
              "word": "indefatigable"
          }
      ],
      "Neuroticism_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "imperturbable"
          },
          {
              "perceived_negatively": true,
              "word": "insensitive"
          }
      ],
      "Neuroticism_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "heartfelt"
          },
          {
              "perceived_negatively": false,
              "word": "versatile"
          },
          {
              "perceived_negatively": false,
              "word": "creative"
          },
          {
              "perceived_negatively": false,
              "word": "intellectual"
          },
          {
              "perceived_negatively": false,
              "word": "insightful"
          }
      ],
      "Neuroticism_plus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "temperamental"
          },
          {
              "perceived_negatively": true,
              "word": "irritable"
          },
          {
              "perceived_negatively": true,
              "word": "quarrelsome"
          },
          {
              "perceived_negatively": true,
              "word": "impatient"
          },
          {
              "perceived_negatively": true,
              "word": "grumpy"
          },
          {
              "perceived_negatively": true,
              "word": "crabby"
          },
          {
              "perceived_negatively": true,
              "word": "cranky"
          }
      ],
      "Neuroticism_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "emotional"
          },
          {
              "perceived_negatively": true,
              "word": "gullible"
          },
          {
              "perceived_negatively": false,
              "word": "affectionate"
          },
          {
              "perceived_negatively": false,
              "word": "sensitive"
          },
          {
              "perceived_negatively": false,
              "word": "soft"
          }
      ],
      "Neuroticism_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "compulsive"
          },
          {
              "perceived_negatively": true,
              "word": "nosey"
          },
          {
              "perceived_negatively": true,
              "word": "self-indulgent"
          },
          {
              "perceived_negatively": true,
              "word": "forgetful"
          },
          {
              "perceived_negatively": true,
              "word": "impulsive"
          }
      ],
      "Neuroticism_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "particular"
          },
          {
              "perceived_negatively": true,
              "word": "high-strung"
          }
      ],
      "Neuroticism_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "guarded"
          },
          {
              "perceived_negatively": true,
              "word": "fretful"
          },
          {
              "perceived_negatively": true,
              "word": "insecure"
          },
          {
              "perceived_negatively": true,
              "word": "pessimistic"
          },
          {
              "perceived_negatively": false,
              "word": "secretive"
          },
          {
              "perceived_negatively": true,
              "word": "fearful"
          },
          {
              "perceived_negatively": true,
              "word": "negativistic"
          },
          {
              "perceived_negatively": false,
              "word": "self-critical"
          }
      ],
      "Neuroticism_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "excitable"
          },
          {
              "perceived_negatively": true,
              "word": "wordy"
          },
          {
              "perceived_negatively": false,
              "word": "flirtatious"
          },
          {
              "perceived_negatively": true,
              "word": "explosive"
          },
          {
              "perceived_negatively": false,
              "word": "extravagant"
          },
          {
              "perceived_negatively": true,
              "word": "volatile"
          }
      ],
      "Neuroticism_plus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "easily rattled"
          },
          {
              "perceived_negatively": false,
              "word": "easily irked"
          },
          {
              "perceived_negatively": false,
              "word": "apprehensive"
          }
      ],
      "Neuroticism_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "excitable"
          },
          {
              "perceived_negatively": false,
              "word": "passionate"
          },
          {
              "perceived_negatively": false,
              "word": "sensual"
          }
      ],
      "Openness_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "coarse"
          },
          {
              "perceived_negatively": true,
              "word": "tactless"
          },
          {
              "perceived_negatively": true,
              "word": "curt"
          },
          {
              "perceived_negatively": true,
              "word": "narrow-minded"
          },
          {
              "perceived_negatively": true,
              "word": "callous"
          }
      ],
      "Openness_minus_Agreeableness_plus": [
          {
              "perceived_negatively": true,
              "word": "simple"
          },
          {
              "perceived_negatively": true,
              "word": "dependent"
          }
      ],
      "Openness_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "shortsighted"
          },
          {
              "perceived_negatively": false,
              "word": "foolhardy"
          },
          {
              "perceived_negatively": true,
              "word": "illogical"
          },
          {
              "perceived_negatively": true,
              "word": "immature"
          },
          {
              "perceived_negatively": true,
              "word": "haphazard"
          },
          {
              "perceived_negatively": false,
              "word": "lax"
          },
          {
              "perceived_negatively": true,
              "word": "flippant"
          }
      ],
      "Openness_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "conventional"
          },
          {
              "perceived_negatively": false,
              "word": "traditional"
          }
      ],
      "Openness_minus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "predictable"
          },
          {
              "perceived_negatively": true,
              "word": "unimaginative"
          },
          {
              "perceived_negatively": false,
              "word": "somber"
          },
          {
              "perceived_negatively": true,
              "word": "apathetic"
          },
          {
              "perceived_negatively": true,
              "word": "unadventurous"
          }
      ],
      "Openness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "verbose"
          },
          {
              "perceived_negatively": true,
              "word": "unscrupulous"
          },
          {
              "perceived_negatively": true,
              "word": "pompous"
          }
      ],
      "Openness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "imperturbable"
          },
          {
              "perceived_negatively": true,
              "word": "insensitive"
          }
      ],
      "Openness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "easily rattled"
          },
          {
              "perceived_negatively": false,
              "word": "easily irked"
          },
          {
              "perceived_negatively": false,
              "word": "apprehensive"
          }
      ],
      "Openness_plus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "shrewd"
          },
          {
              "perceived_negatively": false,
              "word": "eccentric"
          },
          {
              "perceived_negatively": false,
              "word": "individualistic"
          }
      ],
      "Openness_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "idealistic"
          },
          {
              "perceived_negatively": false,
              "word": "diplomatic"
          },
          {
              "perceived_negatively": false,
              "word": "deep"
          },
          {
              "perceived_negatively": false,
              "word": "tactful"
          },
          {
              "perceived_negatively": false,
              "word": "genial"
          }
      ],
      "Openness_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "unconventional"
          },
          {
              "perceived_negatively": false,
              "word": "quirky"
          }
      ],
      "Openness_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "analytical"
          },
          {
              "perceived_negatively": false,
              "word": "perceptive"
          },
          {
              "perceived_negatively": false,
              "word": "informative"
          },
          {
              "perceived_negatively": false,
              "word": "articulate"
          },
          {
              "perceived_negatively": false,
              "word": "dignified"
          },
          {
              "perceived_negatively": false,
              "word": "cultured"
          }
      ],
      "Openness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "introspective"
          },
          {
              "perceived_negatively": false,
              "word": "meditative"
          },
          {
              "perceived_negatively": false,
              "word": "contemplating"
          },
          {
              "perceived_negatively": false,
              "word": "self-examining"
          },
          {
              "perceived_negatively": false,
              "word": "inner-directed"
          }
      ],
      "Openness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "worldly"
          },
          {
              "perceived_negatively": false,
              "word": "theatrical"
          },
          {
              "perceived_negatively": false,
              "word": "eloquent"
          },
          {
              "perceived_negatively": false,
              "word": "inquisitive"
          },
          {
              "perceived_negatively": false,
              "word": "intense"
          }
      ],
      "Openness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "creative"
          },
          {
              "perceived_negatively": false,
              "word": "intellectual"
          },
          {
              "perceived_negatively": false,
              "word": "insightful"
          },
          {
              "perceived_negatively": false,
              "word": "versatile"
          },
          {
              "perceived_negatively": false,
              "word": "inventive"
          }
      ],
      "Openness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "passionate"
          },
          {
              "perceived_negatively": false,
              "word": "excitable"
          },
          {
              "perceived_negatively": false,
              "word": "sensual"
          }
      ]
  },
  "values": {
      "Hedonism": [
          {
              "Term": "Taking pleasure in life",
              "LowDescription": "You prefer activities with a purpose greater than just personal enjoyment",
              "HighDescription": "You are highly motivated to enjoy life to its fullest"
          }
      ],
      "Self-transcendence": [
          {
              "Term": "Helping others",
              "LowDescription": "You think people can handle their own business without interference",
              "HighDescription": "You think it is important to take care of the people around you"
          },
          {
              "Term": "Fairness",
              "LowDescription": "You believe that people create their own opportunities",
              "HighDescription": "You believe in social justice and equality for all"
          },
          {
              "Term": "Social justice",
              "LowDescription": "You believe that people create their own opportunities",
              "HighDescription": "You believe in social justice and equality for all"
          },
          {
              "Term": "Equality",
              "LowDescription": "You believe that people create their own opportunities",
              "HighDescription": "You believe in social justice and equality for all"
          },
          {
              "Term": "Community service",
              "LowDescription": "You think people can handle their own business without interference",
              "HighDescription": "You think it is important to take care of the people around you"
          }
      ],
      "Conservation": [
          {
              "Term": "Tradition",
              "LowDescription": "You care more about making your own path than following what others have done",
              "HighDescription": "You highly respect the groups you belong to and follow their guidance"
          },
          {
              "Term": "Harmony",
              "LowDescription": "You decide what is right based on your beliefs, not what other people think",
              "HighDescription": "You know rules are there for a reason, and you try never to break them"
          },
          {
              "Term": "Humility",
              "LowDescription": "You decide what is right based on your beliefs, not what other people think",
              "HighDescription": "You see worth in deferring to others"
          },
          {
              "Term": "Social norms",
              "LowDescription": "You decide what is right based on your beliefs, not what other people think",
              "HighDescription": "You know rules are there for a reason, and you try never to break them"
          },
          {
              "Term": "Security",
              "LowDescription": "You believe that security is worth sacrificing to achieve other goals",
              "HighDescription": "You believe that safety and security are important things to safeguard"
          },
          {
              "Term": "Safety",
              "LowDescription": "You believe that safety is worth sacrificing to achieve other goals",
              "HighDescription": "You believe that safety and security are important things to safeguard"
          }
      ],
      "Openness-to-change": [
          {
              "Term": "Independence",
              "LowDescription": "You welcome when others direct your activities for you",
              "HighDescription": "You like to set your own goals to decide how to best achieve them"
          },
          {
              "Term": "Excitement",
              "LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
              "HighDescription": "You are eager to search out new and exciting experiences"
          },
          {
              "Term": "Creativity",
              "LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
              "HighDescription": "You are eager to search out new and exciting experiences"
          },
          {
              "Term": "Curiosity",
              "LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
              "HighDescription": "You are eager to search out new and exciting experiences"
          },
          {
              "Term": "Self-direction",
              "LowDescription": "You welcome when others direct your activities for you",
              "HighDescription": "You like to set your own goals to decide how to best achieve them"
          },
          {
              "Term": "Freedom",
              "LowDescription": "You welcome when others direct your activities for you",
              "HighDescription": "You like to set your own goals to decide how to best achieve them"
          }
      ],
      "Self-enhancement": [
          {
              "Term": "Achieving success",
              "LowDescription": "You make decisions with little regard for how they show off your talents",
              "HighDescription": "You seek out opportunities to improve yourself and demonstrate that you are a capable person"
          },
          {
              "Term": "Gaining social status",
              "LowDescription": "You are comfortable with your social status and don't feel a strong need to improve it",
              "HighDescription": "You put substantial effort into improving your status and public image"
          },
          {
              "Term": "Ambition",
              "LowDescription": "You are comfortable with your social status and don't feel a strong need to improve it",
              "HighDescription": "You feel it is important to push forward towards goals"
          },
          {
              "Term": "High achievement",
              "LowDescription": "You make decisions with little regard for how they show off your talents",
              "HighDescription": "You seek out opportunities to improve yourself and demonstrate that you are a capable person"
          }
      ]
  }
}

},{}],2:[function(require,module,exports){
module.exports={
  "facets": {
    "Anger": {
      "LowTerm": "Apacible",
      "HighDescription": "Tiene un temperamento fuerte, especialmente cuando las cosas no funcionan como espera",
      "HighTerm": "Intenso",
      "LowDescription": "Es difícil hacerle enojar",
      "Big5": "Neuroticism"
    },
    "Trust": {
      "LowTerm": "Cuidadoso con los demás",
      "HighDescription": "Cree lo mejor de los demás y confía fácilmente en las personas",
      "HighTerm": "Una persona que confía en los demás",
      "LowDescription": "Se cuida de las intenciones de los demás y no confía fácilmente",
      "Big5": "Agreeableness"
    },
    "Liberalism": {
      "LowTerm": "Respetuoso de la autoridad",
      "HighDescription": "Prefiere desafiar a la autoridad y  a los valores tradicionales para lograr cambios positivos",
      "HighTerm": "Desafiante ante la autoridad",
      "LowDescription": "Prefiere seguir tradiciones para mantener una sensación de estabilidad",
      "Big5": "Openness"
    },
    "Emotionality": {
      "LowTerm": "Desapasionado",
      "HighDescription": "Es consciente de sus sentimientos y de cómo expresarlos",
      "HighTerm": "Emocionalmente consciente",
      "LowDescription": "No piensa frecuentemente acerca de sus emociones ni las expresa abiertamente",
      "Big5": "Openness"
    },
    "Orderliness": {
      "LowTerm": "Desestructurado",
      "HighDescription": "Siente una fuerte necesidad de mantener una vida estructurada",
      "HighTerm": "Organizado",
      "LowDescription": "No le dedica mucho tiempo a organizarse en su vida diaria",
      "Big5": "Conscientiousness"
    },
    "Cheerfulness": {
      "LowTerm": "Solemne",
      "HighDescription": "Es una persona alegre y comparte esa alegría con el mundo",
      "HighTerm": "Alegre",
      "LowDescription": "Generalmente es serio y no hace muchas bromas",
      "Big5": "Extraversion"
    },
    "Cautiousness": {
      "LowTerm": "Audaz",
      "HighDescription": "Piensa cuidadosamente acerca de sus decisiones antes de tomarlas",
      "HighTerm": "Prudente",
      "LowDescription": "Prefiere tomar acción inmediatamente antes que invertir tiempo deliberando qué decisión tomar",
      "Big5": "Conscientiousness"
    },
    "Modesty": {
      "LowTerm": "Orgulloso",
      "HighDescription": "Se siente cómodo siendo el centro de atención",
      "HighTerm": "Modesto",
      "LowDescription": "Se tiene una estima alta, se encuentra satisfecho con quién es",
      "Big5": "Agreeableness"
    },
    "Cooperation": {
      "LowTerm": "Contrario",
      "HighDescription": "Es fácil de complacer e intenta evitar posibles confrontaciones",
      "HighTerm": "Acomodaticio",
      "LowDescription": "No te importa contradecir a los demás",
      "Big5": "Agreeableness"
    },
    "Excitement-seeking": {
      "LowTerm": "Una persona que busca la calma",
      "HighDescription": "Le emociona tomar riesgos y se aburre si no se ve envuelto en mucha acción",
      "HighTerm": "Una persona que busca la emoción",
      "LowDescription": "Prefiere las actividades tranquilas, pacíficas y seguras",
      "Big5": "Extraversion"
    },
    "Assertiveness": {
      "LowTerm": "Callado",
      "HighDescription": "Tiende a expresarse y a hacerse cargo de las situaciones, y se encuentra cómodo liderando grupos",
      "HighTerm": "Asertivo",
      "LowDescription": "Prefiere escuchar antes que hablar, especialmente en situaciones de grupo",
      "Big5": "Extraversion"
    },
    "Artistic-interests": {
      "LowTerm": "Una persona desinteresada por el arte",
      "HighDescription": "Disfruta de la belleza y busca experiencias creativas",
      "HighTerm": "Una persona que aprecia el arte",
      "LowDescription": "Le interesan menos las actividades artísticas o creativas que la mayoría de las personas que participaron de nuestras encuestas",
      "Big5": "Openness"
    },
    "Self-consciousness": {
      "LowTerm": "Confiado",
      "HighDescription": "Es sensible a lo que las demás personas podrían estar pensando acerca de usted",
      "HighTerm": "Consciente de sí mismo",
      "LowDescription": "Es difícil de avergonzar y confía en sí mismo la mayor parte del tiempo",
      "Big5": "Neuroticism"
    },
    "Depression": {
      "LowTerm": "Una persona satisfecha",
      "HighDescription": "Piensa bastante seguido en las cosas con las que está disconforme",
      "HighTerm": "Melancólico",
      "LowDescription": "Generalmente se acepta a usted mismo tal cual es",
      "Big5": "Neuroticism"
    },
    "Imagination": {
      "LowTerm": "Una persona con los pies en la tierra",
      "HighDescription": "Su imaginación vuela libre",
      "HighTerm": "Imaginativo",
      "LowDescription": "Prefiere hechos antes que la fantasía",
      "Big5": "Openness"
    },
    "Morality": {
      "LowTerm": "Una persona comprometida",
      "HighDescription": "Piensa que está mal tomar ventaja de los demás para avanzar",
      "HighTerm": "Intransigente",
      "LowDescription": "Utiliza cualquier medio posible para conseguir lo que quiere y está cómodo con ello",
      "Big5": "Agreeableness"
    },
    "Self-discipline": {
      "LowTerm": "Intermitente",
      "HighDescription": "Puede hacer frente y llevar a cabo tareas difíciles",
      "HighTerm": "Persistente",
      "LowDescription": "Le da trabajo llevar adelante tareas difíciles por un largo periodo de tiempo",
      "Big5": "Conscientiousness"
    },
    "Dutifulness": {
      "LowTerm": "Despreocupado",
      "HighDescription": "Toma las reglas y las obligaciones seriamente, aún cuando son inconvenientes",
      "HighTerm": "Una persona que cumple con su deber",
      "LowDescription": "Hace lo que quiere sin importar las reglas y las obligaciones",
      "Big5": "Conscientiousness"
    },
    "Activity-level": {
      "LowTerm": "Relajado",
      "HighDescription": "Disfruta llevar un ritmo de vida acelerado, una agenda ocupada con muchas actividades",
      "HighTerm": "Energético",
      "LowDescription": "Aprecia llevar un ritmo de vida relajado",
      "Big5": "Extraversion"
    },
    "Vulnerability": {
      "LowTerm": "Una persona que mantiene la calma bajo presión",
      "HighDescription": "Se abruma fácilmente en situaciones de estrés",
      "HighTerm": "Susceptible al estrés",
      "LowDescription": "Maneja eventos inesperados con calma y efectivamente",
      "Big5": "Neuroticism"
    },
    "Anxiety": {
      "LowTerm": "Seguro de sí mismo",
      "HighDescription": "Tiende a preocuparse acerca de las cosas que podrían pasar",
      "HighTerm": "Propenso a preocuparse",
      "LowDescription": "Tiende a sentirse tranquilo y a confiar en sí mismo",
      "Big5": "Neuroticism"
    },
    "Sympathy": {
      "LowTerm": "Una persona de gran fortaleza",
      "HighDescription": "Siente lo que otros sienten y es compasivo con ellos",
      "HighTerm": "Empático",
      "LowDescription": "Cree que las personas deberían confiar más en sí mismos que en otras personas",
      "Big5": "Agreeableness"
    },
    "Achievement-striving": {
      "LowTerm": "Una persona satisfecha",
      "HighDescription": "Se propone grandes metas y trabaja duro para alcanzarlas",
      "HighTerm": "Una persona motivada",
      "LowDescription": "Está conforme con sus logros y no siente la necesidad de ponerse metas más ambiciosas",
      "Big5": "Conscientiousness"
    },
    "Altruism": {
      "LowTerm": "Individualista",
      "HighDescription": "Se siente realizado ayudando a otros y dejará sus cosas de lado para hacerlo",
      "HighTerm": "Altruista",
      "LowDescription": "Está más enfocado en cuidar de usted mismo que en dedicar tiempo a otras personas",
      "Big5": "Agreeableness"
    },
    "Immoderation": {
      "LowTerm": "Sereno",
      "HighDescription": "Siente fuertemente sus deseos y es fácilmente tentado por ellos",
      "HighTerm": "Hedonista",
      "LowDescription": "Controla sus deseos, los cuales no son particularmente intensos",
      "Big5": "Neuroticism"
    },
    "Self-efficacy": {
      "LowTerm": "Inseguro de sí misma",
      "HighDescription": "Siente que tiene la habilidad de triunfar en las tareas que se propone realizar",
      "HighTerm": "Seguro de sí mismo",
      "LowDescription": "Frecuentemente duda acerca de su habilidad para alcanzar sus metas",
      "Big5": "Conscientiousness"
    },
    "Friendliness": {
      "LowTerm": "Reservado",
      "HighDescription": "Hace amigos fácilmente y se siente cómodo estando con otras personas",
      "HighTerm": "Extrovertido",
      "LowDescription": "Es una persona reservada y no deja a muchas personas entrar",
      "Big5": "Extraversion"
    },
    "Gregariousness": {
      "LowTerm": "Independiente",
      "HighDescription": "Disfruta estando en compañía de otros",
      "HighTerm": "Sociable",
      "LowDescription": "Tiene un fuerte deseo de tener tiempo para usted mismo",
      "Big5": "Extraversion"
    },
    "Adventurousness": {
      "LowTerm": "Consistente",
      "HighDescription": "Está deseoso de tener nuevas experiencias",
      "HighTerm": "Audaz",
      "LowDescription": "Disfruta de las rutinas familiares y prefiere no desviarse de ellas",
      "Big5": "Openness"
    },
    "Intellect": {
      "LowTerm": "Concreto",
      "HighDescription": "Está abierto a nuevas ideas, le intrigan y ama explorarlas",
      "HighTerm": "Filosófico",
      "LowDescription": "Prefiere lidiar con el mundo tal cual es, raramente considerando ideas abstractas",
      "Big5": "Openness"
    }
  },
  "needs": {
    "Love": [
      "afinidad",
      "conexión"
    ],
    "Excitement": [
      "regocijo",
      "anticipación",
      "cebración"
    ],
    "Liberty": [
      "modernidad",
      "expansión de posibilidades",
      "poder escapar",
      "espontaneidad",
      "novedad"
    ],
    "Structure": [
      "organización",
      "franqueza",
      "claridad",
      "confiabilidad"
    ],
    "Practicality": [
      "eficiencia",
      "practicidad",
      "valor agregado",
      "conveniencia"
    ],
    "Self-expression": [
      "auto-expresión",
      "empoderamiento personal",
      "fortaleza personal"
    ],
    "Closeness": [
      "pertenencia",
      "nostalgia",
      "intimidad"
    ],
    "Challenge": [
      "prestigio",
      "competencia",
      "gloria"
    ],
    "Curiosity": [
      "descubrimiento",
      "maestría",
      "adquisición de conocimiento"
    ],
    "Stability": [
      "estabilidad",
      "autenticidad",
      "integridad"
    ],
    "Harmony": [
      "bienestar",
      "cortesía",
      "civilidad"
    ],
    "Ideal": [
      "sofisticación",
      "espiritualidad",
      "superioridad",
      "realización"
    ]
  },
  "phrases": {
    "Experiences that give a sense of %s hold some appeal to you": "Le agradan las experiencias que le dan una sensación de %s",
    "You consider %s to guide a large part of what you do": "Usted considera que %s lo guia en gran parte de lo que hace",
    "You value both %s a bit": "Usted valora a %s un poco",
    "And %s": "Y %s",
    "And you are %s": "Y usted es %s",
    "a bit %s": "un poco %s",
    "can be perceived as %s": "puede ser percibido como %s",
    "You are relatively unconcerned with both %s and %s": "Usted es relativamente indiferente con %s y %s",
    "You are %s and %s": "Usted es %s y %s",
    "You value both %s and %s a bit": "Usted valora a %s y %s un poco",
    "You don't find %s to be particularly motivating for you": "Usted no encuentra a %s particularmente motivante para usted",
    "You are %s": "Usted es %s",
    "You are %s, %s and %s": "Usted es %s, %s y %s",
    "You are motivated to seek out experiences that provide a strong feeling of %s": "Está motivado a buscar experiencias que lo provean de una fuerte sensación de %s",
    "Experiences that make you feel high %s are generally unappealing to you": "No le agradan las experiencias que le dan una gran sensación de %s",
    "You don't find either %s or %s to be particularly motivating for you": "Usted no encuentra a %s o %s particularmente motivantes para usted",
    "You are relatively unconcerned with %s": "Usted es relativamente indiferente con %s",
    "somewhat %s": "algo %s",
    "Your choices are driven by a desire for %s": "Sus elecciones están determinadas por un deseo de %s",
    "You consider both %s and %s to guide a large part of what you do": "Usted considera que %s y %s lo guian en gran parte de lo que hace"
  },
  "traits": {
    "Agreeableness_plus_Neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "generoso"
      },
      {
        "perceived_negatively": false,
        "word": "agradable"
      },
      {
        "perceived_negatively": false,
        "word": "tolerante"
      },
      {
        "perceived_negatively": false,
        "word": "pacífico"
      },
      {
        "perceived_negatively": false,
        "word": "flexible"
      },
      {
        "perceived_negatively": false,
        "word": "fácil de tratar"
      },
      {
        "perceived_negatively": false,
        "word": "justo"
      },
      {
        "perceived_negatively": false,
        "word": "caritativo"
      },
      {
        "perceived_negatively": false,
        "word": "confiable"
      }
    ],
    "Extraversion_plus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "expresivo"
      },
      {
        "perceived_negatively": false,
        "word": "cándido"
      },
      {
        "perceived_negatively": false,
        "word": "dramático"
      },
      {
        "perceived_negatively": false,
        "word": "espontáneo"
      },
      {
        "perceived_negatively": false,
        "word": "ingenioso"
      },
      {
        "perceived_negatively": false,
        "word": "oportunista"
      },
      {
        "perceived_negatively": false,
        "word": "independiente"
      }
    ],
    "Extraversion_minus_Neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "desconfiado"
      },
      {
        "perceived_negatively": false,
        "word": "pesimista"
      },
      {
        "perceived_negatively": false,
        "word": "reservado"
      },
      {
        "perceived_negatively": true,
        "word": "cobarde"
      },
      {
        "perceived_negatively": false,
        "word": "callado"
      }
    ],
    "Conscientiousness_minus_Extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "revoltoso"
      },
      {
        "perceived_negatively": false,
        "word": "bullicioso"
      },
      {
        "perceived_negatively": true,
        "word": "temerario"
      },
      {
        "perceived_negatively": true,
        "word": "tumultuoso"
      },
      {
        "perceived_negatively": false,
        "word": "demostrativo"
      }
    ],
    "Agreeableness_minus_Conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "desconsiderado"
      },
      {
        "perceived_negatively": true,
        "word": "descortés"
      },
      {
        "perceived_negatively": true,
        "word": "desconfiado"
      },
      {
        "perceived_negatively": true,
        "word": "poco cooperativo"
      },
      {
        "perceived_negatively": true,
        "word": "irreflexivo"
      }
    ],
    "Neuroticism_minus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "sentido"
      },
      {
        "perceived_negatively": false,
        "word": "versátil"
      },
      {
        "perceived_negatively": false,
        "word": "creativo"
      },
      {
        "perceived_negatively": false,
        "word": "intelectual"
      },
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      }
    ],
    "Openness_plus_Agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      },
      {
        "perceived_negatively": false,
        "word": "excéntrico"
      },
      {
        "perceived_negatively": false,
        "word": "individualista"
      }
    ],
    "Agreeableness_minus_Extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "cínico"
      },
      {
        "perceived_negatively": true,
        "word": "cauto con los demás"
      },
      {
        "perceived_negatively": true,
        "word": "solitario"
      },
      {
        "perceived_negatively": true,
        "word": "desapegado"
      },
      {
        "perceived_negatively": true,
        "word": "impersonal"
      },
      {
        "perceived_negatively": true,
        "word": "sombrío"
      }
    ],
    "Extraversion_minus_Neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "tranquilo"
      },
      {
        "perceived_negatively": false,
        "word": "sosegado"
      },
      {
        "perceived_negatively": false,
        "word": "plácido"
      },
      {
        "perceived_negatively": false,
        "word": "imparcial"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      },
      {
        "perceived_negatively": false,
        "word": "condescendiente"
      }
    ],
    "Openness_plus_Extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      },
      {
        "perceived_negatively": false,
        "word": "meditativo"
      },
      {
        "perceived_negatively": false,
        "word": "contemplativo"
      },
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      },
      {
        "perceived_negatively": false,
        "word": "pensativo"
      }
    ],
    "Neuroticism_minus_Agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "paciente"
      },
      {
        "perceived_negatively": false,
        "word": "relajado"
      },
      {
        "perceived_negatively": false,
        "word": "poco exigente"
      },
      {
        "perceived_negatively": false,
        "word": "realista"
      },
      {
        "perceived_negatively": false,
        "word": "optimista"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      },
      {
        "perceived_negatively": false,
        "word": "poco crítico"
      },
      {
        "perceived_negatively": false,
        "word": "poco pretencioso"
      }
    ],
    "Neuroticism_minus_Agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "poco emocional"
      },
      {
        "perceived_negatively": true,
        "word": "insensible"
      },
      {
        "perceived_negatively": true,
        "word": "poco cariñoso"
      },
      {
        "perceived_negatively": true,
        "word": "desapasionado"
      }
    ],
    "Agreeableness_plus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "servicial"
      },
      {
        "perceived_negatively": false,
        "word": "cooperativo"
      },
      {
        "perceived_negatively": false,
        "word": "considerado"
      },
      {
        "perceived_negatively": false,
        "word": "respetuoso"
      },
      {
        "perceived_negatively": false,
        "word": "cortés"
      },
      {
        "perceived_negatively": false,
        "word": "sensato"
      },
      {
        "perceived_negatively": false,
        "word": "atento"
      },
      {
        "perceived_negatively": false,
        "word": "considerado"
      },
      {
        "perceived_negatively": false,
        "word": "leal"
      },
      {
        "perceived_negatively": false,
        "word": "moral"
      }
    ],
    "Openness_minus_Neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "irritable"
      },
      {
        "perceived_negatively": false,
        "word": "fastidioso"
      },
      {
        "perceived_negatively": false,
        "word": "aprensivo"
      }
    ],
    "Openness_minus_Agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "ordinario"
      },
      {
        "perceived_negatively": true,
        "word": "sin tacto"
      },
      {
        "perceived_negatively": true,
        "word": "brusco"
      },
      {
        "perceived_negatively": true,
        "word": "cerrado"
      },
      {
        "perceived_negatively": true,
        "word": "duro"
      }
    ],
    "Extraversion_minus_Agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "pacífico"
      },
      {
        "perceived_negatively": false,
        "word": "humilde"
      },
      {
        "perceived_negatively": false,
        "word": "sumiso"
      },
      {
        "perceived_negatively": false,
        "word": "tímido"
      },
      {
        "perceived_negatively": false,
        "word": "obediente"
      },
      {
        "perceived_negatively": false,
        "word": "ingenuo"
      }
    ],
    "Extraversion_plus_Neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "explosivo"
      },
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": false,
        "word": "extravagante"
      },
      {
        "perceived_negatively": true,
        "word": "volátil"
      },
      {
        "perceived_negatively": false,
        "word": "coqueto"
      }
    ],
    "Extraversion_minus_Openness_minus": [
      {
        "perceived_negatively": false,
        "word": "sombrío"
      },
      {
        "perceived_negatively": true,
        "word": "manso"
      },
      {
        "perceived_negatively": true,
        "word": "poco aventurero"
      },
      {
        "perceived_negatively": false,
        "word": "pasivo"
      },
      {
        "perceived_negatively": true,
        "word": "apático"
      },
      {
        "perceived_negatively": false,
        "word": "dócil"
      }
    ],
    "Agreeableness_minus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      },
      {
        "perceived_negatively": false,
        "word": "excéntrico"
      },
      {
        "perceived_negatively": false,
        "word": "individualista"
      }
    ],
    "Openness_plus_Neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "creativo"
      },
      {
        "perceived_negatively": false,
        "word": "intelectual"
      },
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      },
      {
        "perceived_negatively": false,
        "word": "versátil"
      },
      {
        "perceived_negatively": false,
        "word": "inventivo"
      }
    ],
    "Conscientiousness_minus_Neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "atolondrado"
      },
      {
        "perceived_negatively": true,
        "word": "inconsistente"
      },
      {
        "perceived_negatively": true,
        "word": "errático"
      },
      {
        "perceived_negatively": true,
        "word": "olvidadizo"
      },
      {
        "perceived_negatively": true,
        "word": "impulsivo"
      },
      {
        "perceived_negatively": true,
        "word": "frívolo"
      }
    ],
    "Openness_plus_Extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "mundano"
      },
      {
        "perceived_negatively": false,
        "word": "exagerado"
      },
      {
        "perceived_negatively": false,
        "word": "elocuente"
      },
      {
        "perceived_negatively": false,
        "word": "inquisitivo"
      },
      {
        "perceived_negatively": false,
        "word": "intenso"
      }
    ],
    "Openness_plus_Agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "idealista"
      },
      {
        "perceived_negatively": false,
        "word": "diplomático"
      },
      {
        "perceived_negatively": false,
        "word": "profundo"
      },
      {
        "perceived_negatively": false,
        "word": "una persona con tacto"
      },
      {
        "perceived_negatively": false,
        "word": "amistoso"
      }
    ],
    "Agreeableness_minus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "estricto"
      },
      {
        "perceived_negatively": false,
        "word": "rígido"
      },
      {
        "perceived_negatively": true,
        "word": "duro"
      }
    ],
    "Openness_plus_Conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "poco convencional"
      },
      {
        "perceived_negatively": false,
        "word": "peculiar"
      }
    ],
    "Neuroticism_plus_Conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "compulsivo"
      },
      {
        "perceived_negatively": true,
        "word": "inquisitivo"
      },
      {
        "perceived_negatively": true,
        "word": "desenfrenado"
      },
      {
        "perceived_negatively": true,
        "word": "olvidadizo"
      },
      {
        "perceived_negatively": true,
        "word": "impulsivo"
      }
    ],
    "Neuroticism_minus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "racional"
      },
      {
        "perceived_negatively": false,
        "word": "objetivo"
      },
      {
        "perceived_negatively": false,
        "word": "estable"
      },
      {
        "perceived_negatively": false,
        "word": "lógico"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      },
      {
        "perceived_negatively": false,
        "word": "preparado"
      },
      {
        "perceived_negatively": false,
        "word": "conciso"
      },
      {
        "perceived_negatively": false,
        "word": "exhaustivo"
      },
      {
        "perceived_negatively": false,
        "word": "económico"
      },
      {
        "perceived_negatively": false,
        "word": "disciplinado"
      }
    ],
    "Agreeableness_minus_Openness_minus": [
      {
        "perceived_negatively": true,
        "word": "tosco"
      },
      {
        "perceived_negatively": true,
        "word": "una persona sin tacto"
      },
      {
        "perceived_negatively": true,
        "word": "brusco"
      },
      {
        "perceived_negatively": true,
        "word": "cerrado"
      },
      {
        "perceived_negatively": true,
        "word": "áspero"
      },
      {
        "perceived_negatively": true,
        "word": "implacable"
      },
      {
        "perceived_negatively": true,
        "word": "poco caritativo"
      },
      {
        "perceived_negatively": true,
        "word": "vengativo"
      }
    ],
    "Conscientiousness_minus_Extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "indeciso"
      },
      {
        "perceived_negatively": true,
        "word": "una persona sin propósito"
      },
      {
        "perceived_negatively": false,
        "word": "una persona sin carácter"
      },
      {
        "perceived_negatively": false,
        "word": "una persona sin compromiso"
      },
      {
        "perceived_negatively": true,
        "word": "poco ambicioso"
      }
    ],
    "Agreeableness_minus_Extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "obstinado"
      },
      {
        "perceived_negatively": true,
        "word": "abrupto"
      },
      {
        "perceived_negatively": true,
        "word": "crudo"
      },
      {
        "perceived_negatively": true,
        "word": "combativo"
      },
      {
        "perceived_negatively": true,
        "word": "duro"
      },
      {
        "perceived_negatively": false,
        "word": "astuto"
      },
      {
        "perceived_negatively": true,
        "word": "manipulador"
      },
      {
        "perceived_negatively": true,
        "word": "hosco"
      },
      {
        "perceived_negatively": true,
        "word": "taimado"
      }
    ],
    "Agreeableness_minus_Neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "crítico"
      },
      {
        "perceived_negatively": true,
        "word": "egoísta"
      },
      {
        "perceived_negatively": true,
        "word": "de mal genio"
      },
      {
        "perceived_negatively": true,
        "word": "antagonista"
      },
      {
        "perceived_negatively": true,
        "word": "gruñón"
      },
      {
        "perceived_negatively": true,
        "word": "amargado"
      },
      {
        "perceived_negatively": true,
        "word": "desagradable"
      },
      {
        "perceived_negatively": true,
        "word": "exigente"
      }
    ],
    "Conscientiousness_plus_Extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "cauto"
      },
      {
        "perceived_negatively": false,
        "word": "seguro"
      },
      {
        "perceived_negatively": false,
        "word": "exacto"
      },
      {
        "perceived_negatively": false,
        "word": "formal"
      },
      {
        "perceived_negatively": false,
        "word": "ahorrativo"
      },
      {
        "perceived_negatively": false,
        "word": "principista"
      }
    ],
    "Extraversion_minus_Conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "indirecto"
      },
      {
        "perceived_negatively": true,
        "word": "débil"
      },
      {
        "perceived_negatively": true,
        "word": "perezoso"
      },
      {
        "perceived_negatively": true,
        "word": "poco persistente"
      },
      {
        "perceived_negatively": true,
        "word": "vago"
      }
    ],
    "Extraversion_plus_Agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "social"
      },
      {
        "perceived_negatively": false,
        "word": "enérgico"
      },
      {
        "perceived_negatively": false,
        "word": "entusiasta"
      },
      {
        "perceived_negatively": false,
        "word": "comunicativo"
      },
      {
        "perceived_negatively": false,
        "word": "vibrante"
      },
      {
        "perceived_negatively": false,
        "word": "espirituoso"
      },
      {
        "perceived_negatively": false,
        "word": "magnético"
      },
      {
        "perceived_negatively": false,
        "word": "entusiasta"
      }
    ],
    "Conscientiousness_minus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "poco convencional"
      },
      {
        "perceived_negatively": false,
        "word": "peculiar"
      }
    ],
    "Conscientiousness_plus_Extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "ambicioso"
      },
      {
        "perceived_negatively": false,
        "word": "alerta"
      },
      {
        "perceived_negatively": false,
        "word": "firme"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      },
      {
        "perceived_negatively": false,
        "word": "competitivo"
      }
    ],
    "Neuroticism_minus_Extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "modesto"
      },
      {
        "perceived_negatively": true,
        "word": "poco excitable"
      },
      {
        "perceived_negatively": false,
        "word": "plácido"
      },
      {
        "perceived_negatively": false,
        "word": "tranquilo"
      }
    ],
    "Agreeableness_plus_Extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "efervescente"
      },
      {
        "perceived_negatively": false,
        "word": "alegre"
      },
      {
        "perceived_negatively": false,
        "word": "amistoso"
      },
      {
        "perceived_negatively": false,
        "word": "alegre"
      },
      {
        "perceived_negatively": false,
        "word": "jovial"
      },
      {
        "perceived_negatively": false,
        "word": "jocoso"
      }
    ],
    "Neuroticism_plus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": false,
        "word": "apasionado"
      },
      {
        "perceived_negatively": false,
        "word": "sensual"
      }
    ],
    "Conscientiousness_minus_Neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "informal"
      },
      {
        "perceived_negatively": false,
        "word": "de bajo perfil"
      }
    ],
    "Extraversion_minus_Agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "escéptico"
      },
      {
        "perceived_negatively": false,
        "word": "cauto con los demás"
      },
      {
        "perceived_negatively": true,
        "word": "solitario"
      },
      {
        "perceived_negatively": true,
        "word": "poco comunicativo"
      },
      {
        "perceived_negatively": true,
        "word": "antisocial"
      },
      {
        "perceived_negatively": true,
        "word": "sombrío"
      },
      {
        "perceived_negatively": true,
        "word": "desinteresado"
      },
      {
        "perceived_negatively": false,
        "word": "apartado"
      }
    ],
    "Neuroticism_plus_Openness_minus": [
      {
        "perceived_negatively": false,
        "word": "irritable"
      },
      {
        "perceived_negatively": false,
        "word": "fastidioso"
      },
      {
        "perceived_negatively": false,
        "word": "aprensivo"
      }
    ],
    "Conscientiousness_plus_Openness_minus": [
      {
        "perceived_negatively": false,
        "word": "tradicional"
      },
      {
        "perceived_negatively": false,
        "word": "convencional"
      }
    ],
    "Conscientiousness_minus_Openness_minus": [
      {
        "perceived_negatively": false,
        "word": "temerario"
      },
      {
        "perceived_negatively": true,
        "word": "ilógico"
      },
      {
        "perceived_negatively": true,
        "word": "inmaduro"
      },
      {
        "perceived_negatively": true,
        "word": "azaroso"
      },
      {
        "perceived_negatively": false,
        "word": "laxo"
      },
      {
        "perceived_negatively": true,
        "word": "indisciplinado"
      }
    ],
    "Extraversion_minus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "moderado"
      },
      {
        "perceived_negatively": false,
        "word": "serio"
      },
      {
        "perceived_negatively": false,
        "word": "discreto"
      },
      {
        "perceived_negatively": false,
        "word": "cauteloso"
      },
      {
        "perceived_negatively": false,
        "word": "principista"
      }
    ],
    "Openness_minus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "convencional"
      },
      {
        "perceived_negatively": false,
        "word": "tradicional"
      }
    ],
    "Neuroticism_plus_Agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "emotivo"
      },
      {
        "perceived_negatively": true,
        "word": "crédulo"
      },
      {
        "perceived_negatively": false,
        "word": "cariñoso"
      },
      {
        "perceived_negatively": false,
        "word": "sensible"
      },
      {
        "perceived_negatively": false,
        "word": "blando"
      }
    ],
    "Agreeableness_minus_Neuroticism_minus": [
      {
        "perceived_negatively": true,
        "word": "insensible"
      },
      {
        "perceived_negatively": true,
        "word": "poco afectuoso"
      },
      {
        "perceived_negatively": true,
        "word": "desapasionado"
      },
      {
        "perceived_negatively": true,
        "word": "una persona sin emociones"
      }
    ],
    "Neuroticism_plus_Extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "guardado"
      },
      {
        "perceived_negatively": true,
        "word": "irritable"
      },
      {
        "perceived_negatively": true,
        "word": "inseguro"
      },
      {
        "perceived_negatively": true,
        "word": "pesimista"
      },
      {
        "perceived_negatively": false,
        "word": "reservado"
      },
      {
        "perceived_negatively": true,
        "word": "temeroso"
      },
      {
        "perceived_negatively": true,
        "word": "negativo"
      },
      {
        "perceived_negatively": false,
        "word": "auto-crítico"
      }
    ],
    "Agreeableness_plus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "amistoso"
      },
      {
        "perceived_negatively": false,
        "word": "una persona con tacto"
      },
      {
        "perceived_negatively": false,
        "word": "diplomático"
      },
      {
        "perceived_negatively": false,
        "word": "profundo"
      },
      {
        "perceived_negatively": false,
        "word": "idealista"
      }
    ],
    "Extraversion_plus_Conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "bullicioso"
      },
      {
        "perceived_negatively": false,
        "word": "travieso"
      },
      {
        "perceived_negatively": false,
        "word": "exhibicionista"
      },
      {
        "perceived_negatively": false,
        "word": "gregario"
      },
      {
        "perceived_negatively": false,
        "word": "demostrativo"
      }
    ],
    "Neuroticism_minus_Openness_minus": [
      {
        "perceived_negatively": false,
        "word": "imperturbable"
      },
      {
        "perceived_negatively": true,
        "word": "insensible"
      }
    ],
    "Openness_plus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "analítico"
      },
      {
        "perceived_negatively": false,
        "word": "perceptivo"
      },
      {
        "perceived_negatively": false,
        "word": "informativo"
      },
      {
        "perceived_negatively": false,
        "word": "grandilocuente"
      },
      {
        "perceived_negatively": false,
        "word": "digno"
      },
      {
        "perceived_negatively": false,
        "word": "culto"
      }
    ],
    "Neuroticism_minus_Extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "inconsciente de si mismo"
      },
      {
        "perceived_negatively": false,
        "word": "incansable"
      },
      {
        "perceived_negatively": false,
        "word": "infatigable"
      }
    ],
    "Extraversion_plus_Neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "confiado"
      },
      {
        "perceived_negatively": false,
        "word": "audaz"
      },
      {
        "perceived_negatively": false,
        "word": "seguro"
      },
      {
        "perceived_negatively": false,
        "word": "desinhibido"
      },
      {
        "perceived_negatively": false,
        "word": "valiente"
      },
      {
        "perceived_negatively": false,
        "word": "valiente"
      },
      {
        "perceived_negatively": false,
        "word": "una persona satisfecha de si misma"
      },
      {
        "perceived_negatively": false,
        "word": "vigoroso"
      },
      {
        "perceived_negatively": false,
        "word": "fuerte"
      }
    ],
    "Neuroticism_minus_Conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "informal"
      },
      {
        "perceived_negatively": false,
        "word": "de perfil bajo"
      }
    ],
    "Openness_minus_Extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": true,
        "word": "inescrupuloso"
      },
      {
        "perceived_negatively": true,
        "word": "pomposo"
      }
    ],
    "Openness_minus_Agreeableness_plus": [
      {
        "perceived_negatively": true,
        "word": "simple"
      },
      {
        "perceived_negatively": true,
        "word": "dependiente"
      }
    ],
    "Conscientiousness_minus_Agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "arrebatado"
      },
      {
        "perceived_negatively": true,
        "word": "poco cooperativo"
      },
      {
        "perceived_negatively": true,
        "word": "poco fiable"
      },
      {
        "perceived_negatively": true,
        "word": "desconfiado"
      },
      {
        "perceived_negatively": true,
        "word": "irreflexivo"
      }
    ],
    "Conscientiousness_plus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "sofisticado"
      },
      {
        "perceived_negatively": false,
        "word": "perfeccionista"
      },
      {
        "perceived_negatively": false,
        "word": "industrioso"
      },
      {
        "perceived_negatively": false,
        "word": "digno"
      },
      {
        "perceived_negatively": false,
        "word": "refinado"
      },
      {
        "perceived_negatively": false,
        "word": "culto"
      },
      {
        "perceived_negatively": false,
        "word": "previsor"
      }
    ],
    "Agreeableness_plus_Conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "sobrio"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      }
    ],
    "Agreeableness_plus_Neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "sentimental"
      },
      {
        "perceived_negatively": false,
        "word": "cariñoso"
      },
      {
        "perceived_negatively": false,
        "word": "sensible"
      },
      {
        "perceived_negatively": false,
        "word": "tierno"
      },
      {
        "perceived_negatively": false,
        "word": "apasionado"
      },
      {
        "perceived_negatively": false,
        "word": "romántico"
      }
    ],
    "Conscientiousness_plus_Neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "minucioso"
      },
      {
        "perceived_negatively": false,
        "word": "estable"
      },
      {
        "perceived_negatively": false,
        "word": "consistente"
      },
      {
        "perceived_negatively": false,
        "word": "disciplinado"
      },
      {
        "perceived_negatively": false,
        "word": "lógico"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      },
      {
        "perceived_negatively": false,
        "word": "controlado"
      },
      {
        "perceived_negatively": false,
        "word": "conciso"
      }
    ],
    "Openness_minus_Extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "predecible"
      },
      {
        "perceived_negatively": true,
        "word": "poco imaginativo"
      },
      {
        "perceived_negatively": false,
        "word": "sombrío"
      },
      {
        "perceived_negatively": true,
        "word": "apático"
      },
      {
        "perceived_negatively": true,
        "word": "poco aventurero"
      }
    ],
    "Extraversion_plus_Agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "terco"
      },
      {
        "perceived_negatively": true,
        "word": "vigoroso"
      },
      {
        "perceived_negatively": true,
        "word": "dominador"
      },
      {
        "perceived_negatively": true,
        "word": "presumido"
      },
      {
        "perceived_negatively": true,
        "word": "mandón"
      },
      {
        "perceived_negatively": false,
        "word": "dominante"
      },
      {
        "perceived_negatively": false,
        "word": "astuto"
      }
    ],
    "Neuroticism_plus_Extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": false,
        "word": "coqueto"
      },
      {
        "perceived_negatively": true,
        "word": "explosivo"
      },
      {
        "perceived_negatively": false,
        "word": "extravagante"
      },
      {
        "perceived_negatively": true,
        "word": "volátil"
      }
    ],
    "Agreeableness_plus_Extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "conmovible"
      },
      {
        "perceived_negatively": false,
        "word": "agradable"
      },
      {
        "perceived_negatively": false,
        "word": "servicial"
      },
      {
        "perceived_negatively": false,
        "word": "humilde"
      },
      {
        "perceived_negatively": true,
        "word": "indulgente"
      }
    ],
    "Conscientiousness_plus_Agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "inflexible"
      },
      {
        "perceived_negatively": false,
        "word": "estricto"
      },
      {
        "perceived_negatively": false,
        "word": "rígido"
      }
    ],
    "Openness_minus_Conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "cortoplacista"
      },
      {
        "perceived_negatively": false,
        "word": "temerario"
      },
      {
        "perceived_negatively": true,
        "word": "ilógico"
      },
      {
        "perceived_negatively": true,
        "word": "inmaduro"
      },
      {
        "perceived_negatively": true,
        "word": "azaroso"
      },
      {
        "perceived_negatively": false,
        "word": "laxo"
      },
      {
        "perceived_negatively": true,
        "word": "irrespetuoso"
      }
    ],
    "Conscientiousness_plus_Neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "detallista"
      },
      {
        "perceived_negatively": true,
        "word": "excitable"
      }
    ],
    "Extraversion_plus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "activo"
      },
      {
        "perceived_negatively": false,
        "word": "competitivo"
      },
      {
        "perceived_negatively": false,
        "word": "persistente"
      },
      {
        "perceived_negatively": false,
        "word": "ambicioso"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      }
    ],
    "Extraversion_minus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "una persona guiada por su propia consciencia y valores"
      },
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      },
      {
        "perceived_negatively": false,
        "word": "pensativo"
      },
      {
        "perceived_negatively": false,
        "word": "contemplativo"
      },
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      }
    ],
    "Conscientiousness_plus_Agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "confiable"
      },
      {
        "perceived_negatively": false,
        "word": "responsable"
      },
      {
        "perceived_negatively": false,
        "word": "seguro"
      },
      {
        "perceived_negatively": false,
        "word": "educado"
      },
      {
        "perceived_negatively": false,
        "word": "considerado"
      }
    ],
    "Openness_plus_Neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "apasionado"
      },
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": false,
        "word": "sensual"
      }
    ],
    "Conscientiousness_minus_Agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "poco pretencioso"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      }
    ],
    "Openness_minus_Neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "imperturbable"
      },
      {
        "perceived_negatively": true,
        "word": "insensible"
      }
    ],
    "Neuroticism_plus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "detallista"
      },
      {
        "perceived_negatively": true,
        "word": "excitable"
      }
    ],
    "Neuroticism_plus_Agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "temperamental"
      },
      {
        "perceived_negatively": true,
        "word": "irritable"
      },
      {
        "perceived_negatively": true,
        "word": "peleador"
      },
      {
        "perceived_negatively": true,
        "word": "impaciente"
      },
      {
        "perceived_negatively": true,
        "word": "gruñón"
      },
      {
        "perceived_negatively": true,
        "word": "malhumorado"
      },
      {
        "perceived_negatively": true,
        "word": "irritable"
      }
    ],
    "Agreeableness_plus_Openness_minus": [
      {
        "perceived_negatively": true,
        "word": "dependiente"
      },
      {
        "perceived_negatively": true,
        "word": "simple"
      }
    ],
    "Extraversion_plus_Openness_minus": [
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": true,
        "word": "inescrupuloso"
      },
      {
        "perceived_negatively": true,
        "word": "pomposo"
      }
    ]
  },
  "values": {
    "Self-enhancement": [
      {
        "Term": "Alcanzar el éxito",
        "LowDescription": "Toma decisiones sin considerar cómo muestran sus talentos",
        "HighDescription": "Busca oportunidades para autosuperase y para demostrar que es una persona capaz"
      },
      {
        "Term": "Mejorar su estatus social",
        "LowDescription": "Está conforme con su estatus social y no siente necesidad de mejorarlo",
        "HighDescription": "Se esfuerza considerablemente para mejorar su estatus e imagen pública"
      },
      {
        "Term": "La ambición",
        "LowDescription": "Está conforme con su estatus social y no siente necesidad de mejorarlo",
        "HighDescription": "Siente que es importante avanzar para alcanzar metas"
      },
      {
        "Term": "Los grandes logros",
        "LowDescription": "Toma decisiones sin considerar cómo muestran sus talentos",
        "HighDescription": "Busca oportunidades para autosuperase y para demostrar que es una persona capaz"
      }
    ],
    "Conservation": [
      {
        "Term": "Las tradiciones",
        "LowDescription": "Le importa más seguir su propio camino que seguir el camino de otros",
        "HighDescription": "Tiene mucho respeto por los grupos a los que pertenece y sigue su guía"
      },
      {
        "Term": "La armonía",
        "LowDescription": "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
        "HighDescription": "Cree que las reglas existen por una razón y nunca intenta trasgredirlas"
      },
      {
        "Term": "La humildad",
        "LowDescription": "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
        "HighDescription": "Ve valor en deferir a otros"
      },
      {
        "Term": "Las normas sociales",
        "LowDescription": "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
        "HighDescription": "Cree que las reglas existen por una razón y nunca intenta trasgredirlas"
      },
      {
        "Term": "La seguridad",
        "LowDescription": "Prefiere la seguridad a costa de dejar a un lado sus metas",
        "HighDescription": "Cree que es importante salvaguardar la seguridad"
      },
      {
        "Term": "La seguridad",
        "LowDescription": "Prefiere estar seguro a costa de dejar a un lado sus metas",
        "HighDescription": "Cree que es importante salvaguardar la seguridad"
      }
    ],
    "Self-transcendence": [
      {
        "Term": "Ayudar a los demás",
        "LowDescription": "Cree que las personas pueden encargarse de sus propios asuntos sin interferencia",
        "HighDescription": "Cree que es importante cuidar de las personas que lo rodean"
      },
      {
        "Term": "La justicia",
        "LowDescription": "Cree que son las personas crean sus oportunidades",
        "HighDescription": "Cree en la justicia social y la igualdad para todos"
      },
      {
        "Term": "La justicia social",
        "LowDescription": "Cree que son las personas crean sus oportunidades",
        "HighDescription": "Cree en la justicia social y la igualdad para todos"
      },
      {
        "Term": "La igualdad",
        "LowDescription": "Cree que son las personas crean sus oportunidades",
        "HighDescription": "Cree en la justicia social y la igualdad para todos"
      },
      {
        "Term": "El servicio comunitario",
        "LowDescription": "Cree que las personas pueden encargarse de sus propios asuntos sin interferencia",
        "HighDescription": "Cree que es importante cuidar de las personas que lo rodean"
      }
    ],
    "Openness-to-change": [
      {
        "Term": "Ser independiente",
        "LowDescription": "Recibe de buena manera que otros dirijan sus actividades",
        "HighDescription": "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
      },
      {
        "Term": "La emoción",
        "LowDescription": "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
        "HighDescription": "Está ansioso por buscar experiencias nuevas y emocionantes"
      },
      {
        "Term": "La creatividad",
        "LowDescription": "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
        "HighDescription": "Está ansioso por buscar experiencias nuevas y emocionantes"
      },
      {
        "Term": "La curiosidad",
        "LowDescription": "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
        "HighDescription": "Está ansioso por buscar experiencias nuevas y emocionantes"
      },
      {
        "Term": "La autonomía",
        "LowDescription": "Recibe de buena manera que otros dirijan sus actividades",
        "HighDescription": "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
      },
      {
        "Term": "La libertad",
        "LowDescription": "Recibe de buena manera que otros dirijan sus actividades",
        "HighDescription": "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
      }
    ],
    "Hedonism": [
      {
        "Term": "Disfrutar de la vida",
        "LowDescription": "Prefiere actividades con un propósito más grande que el sólo deleite personal",
        "HighDescription": "Tiene gran motivación por disfrutar la vida en su plenitud"
      }
    ]
  }
}

},{}],3:[function(require,module,exports){
module.exports={
  "facets" : {
  	"Friendliness": {
  		"Big5": "Extraversion",
  		"LowTerm": "遠慮がちな",
  		"HighTerm": "外向的な",
  		"LowDescription": "プライベートな時間を大切にする人で多くの人々を受け入れません",
  		"HighDescription": "友達を作るのが容易で、他人が近くにいることを快適に感じます"
  	},
  	"Gregariousness": {
  		"Big5": "Extraversion",
  		"LowTerm": "自主性の高い",
  		"HighTerm": "社交的な",
  		"LowDescription": "自分の時間を大切にしたいという強い願望があります",
  		"HighDescription": "他の人達と一緒にいることを楽しいと感じます"
  	},
  	"Assertiveness": {
  		"Big5": "Extraversion",
  		"LowTerm": "慎み深い",
  		"HighTerm": "自己主張が強い",
  		"LowDescription": "特にグループにいる状況では話すことよりも聞くことを好みます",
  		"HighDescription": "遠慮なく発言し、その場をリードする傾向があります。また、集団を統率できます"
  	},
  	"Activity-level": {
  		"Big5": "Extraversion",
  		"LowTerm": "のんびりとしている",
  		"HighTerm": "精力的な",
  		"LowDescription": "ゆったりとしたペースの生活を好みます",
  		"HighDescription": "ペースが速く、多様な活動でスケジュールを埋めることを好みます"
  	},
  	"Excitement-seeking": {
  		"Big5": "Extraversion",
  		"LowTerm": "平穏を求める",
  		"HighTerm": "興奮を求める",
  		"LowDescription": "穏やかで和める、安全な活動を好みます",
  		"HighDescription": "リスクを取ることで高揚し、忙しくないと退屈に感じます"
  	},
  	"Cheerfulness": {
  		"Big5": "Extraversion",
  		"LowTerm": "厳粛な",
  		"HighTerm": "快活な",
  		"LowDescription": "普段まじめで、あまり冗談を言いません",
  		"HighDescription": "喜びにあふれる人で、その喜びを周囲と分かち合います"
  	},
  	"Trust": {
  		"Big5": "Agreeableness",
  		"LowTerm": "用心深い",
  		"HighTerm": "人を信じる",
  		"LowDescription": "他人の意図を警戒し、容易に信用しません",
  		"HighDescription": "何においても人を信じ、容易に信頼します"
  	},
  	"Cooperation": {
  		"Big5": "Agreeableness",
  		"LowTerm": "固執する",
  		"HighTerm": "柔軟な",
  		"LowDescription": "他人と対立することに尻込みしません",
  		"HighDescription": "文句を言うような気難しさがなく、対立を回避しようとします"
  	},
  	"Altruism": {
  		"Big5": "Agreeableness",
  		"LowTerm": "自分本位な",
  		"HighTerm": "利他的な",
  		"LowDescription": "人のために時間を費やすよりも、自立的に自分のことを自分で行う傾向があります",
  		"HighDescription": "人を支援することに充実感を覚え、そのように尽力するでしょう"
  	},
  	"Morality": {
  		"Big5": "Agreeableness",
  		"LowTerm": "対面を気にしない",
  		"HighTerm": "名誉を尊重する",
  		"LowDescription": "自分が望むものを得るためにあらゆる手段を講じることを心地よく感じます",
  		"HighDescription": "他人を利用して成功するのは間違っていると考えます"
  	},
  	"Modesty": {
  		"Big5": "Agreeableness",
  		"LowTerm": "自己評価が高い",
  		"HighTerm": "謙虚な",
  		"LowDescription": "自分を高く評価しており、自分に満足しています",
  		"HighDescription": "注目されるのが苦手です"
  	},
  	"Sympathy": {
  		"Big5": "Agreeableness",
  		"LowTerm": "冷淡な",
  		"HighTerm": "感情移入する",
  		"LowDescription": "他人に頼るよりも、自分自身をもっと頼りにすべきだと考えるタイプです",
  		"HighDescription": "他人がどう感じるかを意識し、同情するタイプです"
  	},
  	"Self-efficacy": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "自分に自信が持てない",
  		"HighTerm": "自分に自信がある",
  		"LowDescription": "自分の目標達成能力をしばしば疑います",
  		"HighDescription": "始めたことを成し遂げる能力があると思っています"
  	},
  	"Orderliness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "自由奔放な",
  		"HighTerm": "几帳面な",
  		"LowDescription": "毎日の生活の中で組織のためには多くの時間を割きません",
  		"HighDescription": "規則正しい生活を強く望んでいます"
  	},
  	"Dutifulness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "無頓着な",
  		"HighTerm": "本分を守る",
  		"LowDescription": "ルールや義務を無視してやりたいことをやります",
  		"HighDescription": "ルールや義務が不便であっても真摯に受け止めます"
  	},
  	"Achievement-striving": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "現状に満足している",
  		"HighTerm": "やる気がある",
  		"LowDescription": "自身の達成レベルに満足していて、大胆な目標を設定する必要を感じていません",
  		"HighDescription": "自分自身に高い目標を持ち、それを達成するために熱心に取り組みます"
  	},
  	"Self-discipline": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "集中が途切れる",
  		"HighTerm": "粘り強い",
  		"LowDescription": "長期間にわたって困難な仕事に取り組みつづけることがなかなかできません",
  		"HighDescription": "困難な仕事に取り組み続けることができます"
  	},
  	"Cautiousness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "大胆な",
  		"HighTerm": "慎重な",
  		"LowDescription": "時間をかけて慎重に検討するよりもむしろ即座に行動を起こします",
  		"HighDescription": "意思決定する前に注意深く考えます"
  	},
  	"Anxiety": {
  		"Big5": "Neuroticism",
  		"LowTerm": "自分に自信がある",
  		"HighTerm": "心配しがちな",
  		"LowDescription": "冷静で自信があるように感じる傾向があります",
  		"HighDescription": "起こるかもしれないことについて心配する傾向があります"
  	},
  	"Anger": {
  		"Big5": "Neuroticism",
  		"LowTerm": "温和な",
  		"HighTerm": "熱しやすい",
  		"LowDescription": "滅多に怒りません",
  		"HighDescription": "特に物事があなたの考えるとおりに行かないときにかっとなる性格です"
  	},
  	"Depression": {
  		"Big5": "Neuroticism",
  		"LowTerm": "現状に満足している",
  		"HighTerm": "沈みがちな",
  		"LowDescription": "概してあなた自身に満足しています",
  		"HighDescription": "不満に思うことについて常に考えてしまいます"
  	},
  	"Self-consciousness": {
  		"Big5": "Neuroticism",
  		"LowTerm": "確信を持って行動する",
  		"HighTerm": "人目を気にする",
  		"LowDescription": "困難を感じたりせず、大抵の場合自信に満ちています",
  		"HighDescription": "人からどう思われているかについて神経質になっています"
  	},
  	"Immoderation": {
  		"Big5": "Neuroticism",
  		"LowTerm": "自制心がある",
  		"HighTerm": "快楽主義な",
  		"LowDescription": "自分の欲望をコントロールできますし、強烈な欲望を持ちません",
  		"HighDescription": "強い欲求を持っており、それに惑わされます"
  	},
  	"Vulnerability": {
  		"Big5": "Neuroticism",
  		"LowTerm": "圧力を受けても冷静な",
  		"HighTerm": "ストレスの影響を受けやすい",
  		"LowDescription": "冷静で、予期しない出来事にも効果的に対処します",
  		"HighDescription": "ストレスの多い状況下で精神的に押しつぶされ易い傾向があります"
  	},
  	"Imagination": {
  		"Big5": "Openness",
  		"LowTerm": "堅実な",
  		"HighTerm": "創意に富んでいる",
  		"LowDescription": "思い付きよりも事実を選びます",
  		"HighDescription": "想像力豊かです"
  	},
  	"Artistic-interests": {
  		"Big5": "Openness",
  		"LowTerm": "芸術に無関心な",
  		"HighTerm": "芸術への理解がある",
  		"LowDescription": "我々が調査した人々と比べると、芸術や創作活動にあまり関心がないようです",
  		"HighDescription": "美を楽しみ、創造的な経験を追求します"
  	},
  	"Emotionality": {
  		"Big5": "Openness",
  		"LowTerm": "感情に流されない",
  		"HighTerm": "情緒的な",
  		"LowDescription": "自分の感情についてしきりに考えたり、感情をおおっぴらに表すことはありません",
  		"HighDescription": "自分の感情を自覚していて、どう表現すれば良いかわかっています"
  	},
  	"Adventurousness": {
  		"Big5": "Openness",
  		"LowTerm": "安定している",
  		"HighTerm": "冒険的な",
  		"LowDescription": "いつもの習慣や日課を好み、そこから逸脱することを望みません",
  		"HighDescription": "新しい経験をすることを熱望しています"
  	},
  	"Intellect": {
  		"Big5": "Openness",
  		"LowTerm": "現実的な",
  		"HighTerm": "哲学的な",
  		"LowDescription": "抽象的なアイディアや新しい発想にはあまり目を向けず、現状の世の中にうまく対応していくことを好みます",
  		"HighDescription": "新しいアイディアに興味をそそられ、進んで受け入れ、探求することを好みます"
  	},
  	"Liberalism": {
  		"Big5": "Openness",
  		"LowTerm": "権威を尊重する",
  		"HighTerm": "権威に挑む",
  		"LowDescription": "安定感を大切にし、伝統に従うことを好みます",
  		"HighDescription": "権威や伝統を守るよりも、より良い方向へ変化させる方が良いと考えます"
  	}
  },
  "needs": {
      "Challenge": [
          "名声",
          "競争",
          "栄光"
      ],
      "Closeness": [
          "帰属",
          "郷愁",
          "親密さ"
      ],
      "Curiosity": [
          "発見",
          "専門性",
          "知識獲得"
      ],
      "Excitement": [
          "お祭り騒ぎ",
          "期待",
          "うきうきした気分"
      ],
      "Harmony": [
          "幸福",
          "礼儀",
          "丁寧さ"
      ],
      "Ideal": [
          "洗練",
          "崇高さ",
          "優越感",
          "満足感"
      ],
      "Liberty": [
          "現代性",
          "可能性拡大",
          "束縛脱出",
          "自発性",
          "斬新さ"
      ],
      "Love": [
          "つながり",
          "親近感"
      ],
      "Practicality": [
          "効率",
          "実用性",
          "高価値",
          "利便性"
      ],
      "Self-expression": [
          "自己表現",
          "自己啓発",
          "個人的強み"
      ],
      "Stability": [
          "安定",
          "信憑性",
          "信用性"
      ],
      "Structure": [
          "組織への帰属",
          "率直さ",
          "明瞭さ",
          "信頼性"
      ]
  },
  "phrases": {
    "You are %s": "%sタイプです",
    "You are %s and %s": "%sタイプであり、また%sタイプです",
    "You are %s, %s and %s": "%sタイプであり、%sタイプであり、また%sタイプです",
    "And you are %s": "また、%sタイプです",
    "You are relatively unconcerned with %s": "%sにはあまりこだわりません",
    "You are relatively unconcerned with both %s and %s": "%sと%sの両方にあまりこだわりません",
    "You don't find %s to be particularly motivating for you": "%sには特に関心がありません",
    "You don't find either %s or %s to be particularly motivating for you": "%s、%sのいずれも関心がありません",
    "You value both %s a bit": "両方の%sを少し評価します",
    "You value both %s and %s a bit": "%s と%sの両方が少しばかり有用と考えています",
    "You consider %s to guide a large part of what you do" : "%sがあなたの行動に大きな影響を与えています",
    "You consider both %s and %s to guide a large part of what you do" : "方針を決める際に%sと%sの両方を重要とみなします",
    "And %s": "また%s",
    "You value %s a bit more": "%sを多少有用だと考えています",
    "Experiences that make you feel high %s are generally unappealing to you": "気分が高揚する経験の%sには慨して魅力を感じません",
    "Experiences that give a sense of %s hold some appeal to you": "%sを感じられる体験に魅力を感じます",
    "You are motivated to seek out experiences that provide a strong feeling of %s": "%sにつながる体験を好みます",
    "Your choices are driven by a desire for %s" : "%sを意識して意思決定するタイプです",
    "a bit %s": "少し%s",
    "somewhat %s" : "多少%s",
    "can be perceived as %s": "%s人と思われるかもしれない"
  },
  "traits": {
      "Agreeableness_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "猪突猛進な"
          },
          {
              "perceived_negatively": true,
              "word": "儀礼にこだわらない、単刀直入な"
          },
          {
              "perceived_negatively": true,
              "word": "全面的には信頼しない"
          },
          {
              "perceived_negatively": true,
              "word": "安易に協調せず、自分の信念を貫く"
          },
          {
              "perceived_negatively": true,
              "word": "議論より実践の"
          }
      ],
      "Agreeableness_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "忠実な"
          },
          {
              "perceived_negatively": false,
              "word": "剛直な"
          },
          {
              "perceived_negatively": true,
              "word": "厳格な"
          }
      ],
      "Agreeableness_minus_Extraversion_minus": [
          {
              "perceived_negatively": true,
              "word": "斜に構えた"
          },
          {
              "perceived_negatively": true,
              "word": "人に用心深い"
          },
          {
              "perceived_negatively": true,
              "word": "引っ込み思案な"
          },
          {
              "perceived_negatively": true,
              "word": "私心がない"
          },
          {
              "perceived_negatively": true,
              "word": "客観的な"
          },
          {
              "perceived_negatively": true,
              "word": "心配そうな"
          }
      ],
      "Agreeableness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "頑固な"
          },
          {
              "perceived_negatively": true,
              "word": "飛躍が多い"
          },
          {
              "perceived_negatively": true,
              "word": "荒削りな"
          },
          {
              "perceived_negatively": true,
              "word": "好戦的な"
          },
          {
              "perceived_negatively": true,
              "word": "大まかな"
          },
          {
              "perceived_negatively": false,
              "word": "ちゃめっ気のある"
          },
          {
              "perceived_negatively": true,
              "word": "巧みな"
          },
          {
              "perceived_negatively": true,
              "word": "飾り気のない"
          },
          {
              "perceived_negatively": true,
              "word": "疑われやすい"
          }
      ],
      "Agreeableness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": true,
              "word": "気配りが苦手な"
          },
          {
              "perceived_negatively": true,
              "word": "よそよそしい"
          },
          {
              "perceived_negatively": true,
              "word": "冷静な"
          },
          {
              "perceived_negatively": true,
              "word": "感情に流されない"
          }
      ],
      "Agreeableness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": true,
              "word": "批判的な"
          },
          {
              "perceived_negatively": true,
              "word": "利己的な"
          },
          {
              "perceived_negatively": true,
              "word": "怒りっぽい"
          },
          {
              "perceived_negatively": true,
              "word": "対立する"
          },
          {
              "perceived_negatively": true,
              "word": "ご機嫌斜めの"
          },
          {
              "perceived_negatively": true,
              "word": "厳しい"
          },
          {
              "perceived_negatively": true,
              "word": "社交が苦手な"
          },
          {
              "perceived_negatively": true,
              "word": "人に要求しがちな"
          }
      ],
      "Agreeableness_minus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "大雑把な"
          },
          {
              "perceived_negatively": true,
              "word": "機転の利かない"
          },
          {
              "perceived_negatively": true,
              "word": "素っ気ない"
          },
          {
              "perceived_negatively": true,
              "word": "心にゆとりがない"
          },
          {
              "perceived_negatively": true,
              "word": "情にほだされない"
          },
          {
              "perceived_negatively": true,
              "word": "断固とした"
          },
          {
              "perceived_negatively": true,
              "word": "手加減できない"
          },
          {
              "perceived_negatively": true,
              "word": "執念深い"
          }
      ],
      "Agreeableness_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "鋭敏な"
          },
          {
              "perceived_negatively": false,
              "word": "風変わりな"
          },
          {
              "perceived_negatively": false,
              "word": "個性的な"
          }
      ],
      "Agreeableness_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "控えめな"
          },
          {
              "perceived_negatively": false,
              "word": "でしゃばらない"
          }
      ],
      "Agreeableness_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "役立つ"
          },
          {
              "perceived_negatively": false,
              "word": "協力的な"
          },
          {
              "perceived_negatively": false,
              "word": "思いやりのある"
          },
          {
              "perceived_negatively": false,
              "word": "礼儀正しい"
          },
          {
              "perceived_negatively": false,
              "word": "丁寧な"
          },
          {
              "perceived_negatively": false,
              "word": "道理をわきまえる"
          },
          {
              "perceived_negatively": false,
              "word": "丁重な"
          },
          {
              "perceived_negatively": false,
              "word": "思慮深い"
          },
          {
              "perceived_negatively": false,
              "word": "忠実な"
          },
          {
              "perceived_negatively": false,
              "word": "モラルがある"
          }
      ],
      "Agreeableness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "心が優しい"
          },
          {
              "perceived_negatively": false,
              "word": "快い"
          },
          {
              "perceived_negatively": false,
              "word": "好意的な"
          },
          {
              "perceived_negatively": false,
              "word": "控えめな"
          },
          {
              "perceived_negatively": true,
              "word": "慈悲深い"
          }
      ],
      "Agreeableness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "はしゃぐ"
          },
          {
              "perceived_negatively": false,
              "word": "幸福そうな"
          },
          {
              "perceived_negatively": false,
              "word": "親しみやすい"
          },
          {
              "perceived_negatively": false,
              "word": "面白い"
          },
          {
              "perceived_negatively": false,
              "word": "陽気な"
          },
          {
              "perceived_negatively": false,
              "word": "ユーモアがある"
          }
      ],
      "Agreeableness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "寛大な"
          },
          {
              "perceived_negatively": false,
              "word": "愉快な"
          },
          {
              "perceived_negatively": false,
              "word": "寛容な"
          },
          {
              "perceived_negatively": false,
              "word": "平和的な"
          },
          {
              "perceived_negatively": false,
              "word": "柔軟な"
          },
          {
              "perceived_negatively": false,
              "word": "気楽な"
          },
          {
              "perceived_negatively": false,
              "word": "フェアな"
          },
          {
              "perceived_negatively": false,
              "word": "慈悲深い"
          },
          {
              "perceived_negatively": false,
              "word": "信じやすい"
          }
      ],
      "Agreeableness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "情にもろい"
          },
          {
              "perceived_negatively": false,
              "word": "優しい"
          },
          {
              "perceived_negatively": false,
              "word": "活気にあふれる"
          },
          {
              "perceived_negatively": false,
              "word": "柔和な"
          },
          {
              "perceived_negatively": false,
              "word": "情熱的"
          },
          {
              "perceived_negatively": false,
              "word": "ロマンチストの"
          }
      ],
      "Agreeableness_plus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "人に頼りがちな"
          },
          {
              "perceived_negatively": true,
              "word": "簡素好きな"
          }
      ],
      "Agreeableness_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "愛想の良い"
          },
          {
              "perceived_negatively": false,
              "word": "如才ない"
          },
          {
              "perceived_negatively": false,
              "word": "駆引きがうまい"
          },
          {
              "perceived_negatively": false,
              "word": "深みがある"
          },
          {
              "perceived_negatively": false,
              "word": "理想家の"
          }
      ],
      "Conscientiousness_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "気が早い"
          },
          {
              "perceived_negatively": true,
              "word": "安易に協調せず、自分の信念を貫く"
          },
          {
              "perceived_negatively": true,
              "word": "頼りない"
          },
          {
              "perceived_negatively": true,
              "word": "全面的には信頼しない"
          },
          {
              "perceived_negatively": true,
              "word": "議論より実践の"
          }
      ],
      "Conscientiousness_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "控えめ"
          },
          {
              "perceived_negatively": false,
              "word": "でしゃばらない"
          }
      ],
      "Conscientiousness_minus_Extraversion_minus": [
          {
              "perceived_negatively": true,
              "word": "優柔不断な"
          },
          {
              "perceived_negatively": true,
              "word": "目的がない"
          },
          {
              "perceived_negatively": false,
              "word": "気が抜けている"
          },
          {
              "perceived_negatively": false,
              "word": "当り障りがない"
          },
          {
              "perceived_negatively": true,
              "word": "野心的でない"
          }
      ],
      "Conscientiousness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "気ままな"
          },
          {
              "perceived_negatively": false,
              "word": "ひどく陽気な"
          },
          {
              "perceived_negatively": true,
              "word": "向こう見ずな"
          },
          {
              "perceived_negatively": true,
              "word": "がむしゃらな"
          },
          {
              "perceived_negatively": false,
              "word": "感情を表に出す"
          }
      ],
      "Conscientiousness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "形式張らない"
          },
          {
              "perceived_negatively": false,
              "word": "地味な"
          }
      ],
      "Conscientiousness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": true,
              "word": "ぼーっとしてる"
          },
          {
              "perceived_negatively": true,
              "word": "臨機応変な"
          },
          {
              "perceived_negatively": true,
              "word": "風変わりな"
          },
          {
              "perceived_negatively": true,
              "word": "忘れっぽい"
          },
          {
              "perceived_negatively": true,
              "word": "衝動的な"
          },
          {
              "perceived_negatively": true,
              "word": "勝手気ままな"
          }
      ],
      "Conscientiousness_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "型破りな"
          },
          {
              "perceived_negatively": true,
              "word": "理屈に拘らない"
          },
          {
              "perceived_negatively": true,
              "word": "子どもっぽい"
          },
          {
              "perceived_negatively": true,
              "word": "ぶっつけ本番、出たとこ勝負の"
          },
          {
              "perceived_negatively": false,
              "word": "曖昧な"
          },
          {
              "perceived_negatively": true,
              "word": "浮ついたところのある"
          }
      ],
      "Conscientiousness_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "慣例にとらわれない"
          },
          {
              "perceived_negatively": false,
              "word": "奇抜な"
          }
      ],
      "Conscientiousness_plus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "厳格な"
          },
          {
              "perceived_negatively": false,
              "word": "忠実な"
          },
          {
              "perceived_negatively": false,
              "word": "剛直な"
          }
      ],
      "Conscientiousness_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "頼りになる"
          },
          {
              "perceived_negatively": false,
              "word": "責任感がある"
          },
          {
              "perceived_negatively": false,
              "word": "信頼できる"
          },
          {
              "perceived_negatively": false,
              "word": "礼儀正しい"
          },
          {
              "perceived_negatively": false,
              "word": "思いやりのある"
          }
      ],
      "Conscientiousness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "用心深い"
          },
          {
              "perceived_negatively": false,
              "word": "自信のある"
          },
          {
              "perceived_negatively": false,
              "word": "時間厳守する"
          },
          {
              "perceived_negatively": false,
              "word": "儀礼的な"
          },
          {
              "perceived_negatively": false,
              "word": "やりくりがうまい"
          },
          {
              "perceived_negatively": false,
              "word": "信念を持ってる"
          }
      ],
      "Conscientiousness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "意欲的な"
          },
          {
              "perceived_negatively": false,
              "word": "注意深い"
          },
          {
              "perceived_negatively": false,
              "word": "堅固な"
          },
          {
              "perceived_negatively": false,
              "word": "決断力がある"
          },
          {
              "perceived_negatively": false,
              "word": "競争力がある"
          }
      ],
      "Conscientiousness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "徹底している"
          },
          {
              "perceived_negatively": false,
              "word": "着実な"
          },
          {
              "perceived_negatively": false,
              "word": "一貫している"
          },
          {
              "perceived_negatively": false,
              "word": "自制力がある"
          },
          {
              "perceived_negatively": false,
              "word": "論理的"
          },
          {
              "perceived_negatively": false,
              "word": "決定力のある"
          },
          {
              "perceived_negatively": false,
              "word": "統制された"
          },
          {
              "perceived_negatively": false,
              "word": "簡潔な"
          }
      ],
      "Conscientiousness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "独特な"
          },
          {
              "perceived_negatively": true,
              "word": "緊張しがちな"
          }
      ],
      "Conscientiousness_plus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "伝統を守る"
          },
          {
              "perceived_negatively": false,
              "word": "慣習を重んじる"
          }
      ],
      "Conscientiousness_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "洗練されている"
          },
          {
              "perceived_negatively": false,
              "word": "完璧を追求する"
          },
          {
              "perceived_negatively": false,
              "word": "勤勉な"
          },
          {
              "perceived_negatively": false,
              "word": "品位がある"
          },
          {
              "perceived_negatively": false,
              "word": "上品な"
          },
          {
              "perceived_negatively": false,
              "word": "教養がある"
          },
          {
              "perceived_negatively": false,
              "word": "先見の明のある"
          }
      ],
      "Extraversion_minus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "物事に懐疑的な"
          },
          {
              "perceived_negatively": false,
              "word": "人に用心深い"
          },
          {
              "perceived_negatively": true,
              "word": "引っ込み思案な"
          },
          {
              "perceived_negatively": true,
              "word": "無口な"
          },
          {
              "perceived_negatively": true,
              "word": "社交が苦手な"
          },
          {
              "perceived_negatively": true,
              "word": "心配そうな"
          },
          {
              "perceived_negatively": true,
              "word": "私心がない"
          },
          {
              "perceived_negatively": false,
              "word": "超然とした"
          }
      ],
      "Extraversion_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "非攻撃的な"
          },
          {
              "perceived_negatively": false,
              "word": "控えめな"
          },
          {
              "perceived_negatively": false,
              "word": "素直に対応する"
          },
          {
              "perceived_negatively": false,
              "word": "気が小さい"
          },
          {
              "perceived_negatively": false,
              "word": "適合力のある"
          },
          {
              "perceived_negatively": false,
              "word": "単純な"
          }
      ],
      "Extraversion_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "鵜呑みにしない"
          },
          {
              "perceived_negatively": true,
              "word": "精力的でない"
          },
          {
              "perceived_negatively": true,
              "word": "対応がゆっくりな"
          },
          {
              "perceived_negatively": true,
              "word": "持続力に欠ける"
          },
          {
              "perceived_negatively": true,
              "word": "あやふやな"
          }
      ],
      "Extraversion_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "節度がある"
          },
          {
              "perceived_negatively": false,
              "word": "まじめな"
          },
          {
              "perceived_negatively": false,
              "word": "慎重な"
          },
          {
              "perceived_negatively": false,
              "word": "用心深い"
          },
          {
              "perceived_negatively": false,
              "word": "信念を持ってる"
          }
      ],
      "Extraversion_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "物静かな"
          },
          {
              "perceived_negatively": false,
              "word": "落ち着いている"
          },
          {
              "perceived_negatively": false,
              "word": "穏やかな"
          },
          {
              "perceived_negatively": false,
              "word": "偏見がない"
          },
          {
              "perceived_negatively": false,
              "word": "高ぶらない"
          },
          {
              "perceived_negatively": false,
              "word": "素直な"
          }
      ],
      "Extraversion_minus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "ガードが堅い"
          },
          {
              "perceived_negatively": false,
              "word": "悲観的な"
          },
          {
              "perceived_negatively": false,
              "word": "隠したがる"
          },
          {
              "perceived_negatively": true,
              "word": "気の小さい"
          },
          {
              "perceived_negatively": false,
              "word": "隠したがる"
          }
      ],
      "Extraversion_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "気分が沈みがちな"
          },
          {
              "perceived_negatively": true,
              "word": "おとなしい"
          },
          {
              "perceived_negatively": true,
              "word": "冒険を好まない"
          },
          {
              "perceived_negatively": false,
              "word": "受け身な"
          },
          {
              "perceived_negatively": true,
              "word": "何事にも関心を持たない"
          },
          {
              "perceived_negatively": false,
              "word": "素直な"
          }
      ],
      "Extraversion_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "内部志向型な"
          },
          {
              "perceived_negatively": false,
              "word": "内省的な"
          },
          {
              "perceived_negatively": false,
              "word": "よく瞑想にふける"
          },
          {
              "perceived_negatively": false,
              "word": "熟考する"
          },
          {
              "perceived_negatively": false,
              "word": "自省する"
          }
      ],
      "Extraversion_plus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "自説を曲げない"
          },
          {
              "perceived_negatively": true,
              "word": "強引なところがある"
          },
          {
              "perceived_negatively": true,
              "word": "支配力を追い求める"
          },
          {
              "perceived_negatively": true,
              "word": "自慢好きな"
          },
          {
              "perceived_negatively": true,
              "word": "親分風の"
          },
          {
              "perceived_negatively": false,
              "word": "支配的な"
          },
          {
              "perceived_negatively": false,
              "word": "抜け目のない"
          }
      ],
      "Extraversion_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "社会的な"
          },
          {
              "perceived_negatively": false,
              "word": "精力的な"
          },
          {
              "perceived_negatively": false,
              "word": "熱中しやすい"
          },
          {
              "perceived_negatively": false,
              "word": "おしゃべり好きな"
          },
          {
              "perceived_negatively": false,
              "word": "敏感な"
          },
          {
              "perceived_negatively": false,
              "word": "元気な"
          },
          {
              "perceived_negatively": false,
              "word": "人をひきつける"
          },
          {
              "perceived_negatively": false,
              "word": "何事にも熱心な"
          }
      ],
      "Extraversion_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "ひどく陽気な"
          },
          {
              "perceived_negatively": false,
              "word": "いたずら好きな"
          },
          {
              "perceived_negatively": false,
              "word": "自己の主張に強い信念をもっている"
          },
          {
              "perceived_negatively": false,
              "word": "社交的な"
          },
          {
              "perceived_negatively": false,
              "word": "感情を表に出す"
          }
      ],
      "Extraversion_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "活発な"
          },
          {
              "perceived_negatively": false,
              "word": "競争力がある"
          },
          {
              "perceived_negatively": false,
              "word": "粘り強い"
          },
          {
              "perceived_negatively": false,
              "word": "意欲的な"
          },
          {
              "perceived_negatively": false,
              "word": "決断力がある"
          }
      ],
      "Extraversion_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "自信のある"
          },
          {
              "perceived_negatively": false,
              "word": "大胆な"
          },
          {
              "perceived_negatively": false,
              "word": "確信を持った"
          },
          {
              "perceived_negatively": false,
              "word": "単刀直入な"
          },
          {
              "perceived_negatively": false,
              "word": "精神的に強い"
          },
          {
              "perceived_negatively": false,
              "word": "困難に立ち向かう"
          },
          {
              "perceived_negatively": false,
              "word": "自己に満足している"
          },
          {
              "perceived_negatively": false,
              "word": "元気いっぱいな"
          },
          {
              "perceived_negatively": false,
              "word": "たくましい"
          }
      ],
      "Extraversion_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "熱くなりやすい"
          },
          {
              "perceived_negatively": true,
              "word": "言葉が多い"
          },
          {
              "perceived_negatively": false,
              "word": "ひどく気前が良い"
          },
          {
              "perceived_negatively": true,
              "word": "気まぐれな"
          },
          {
              "perceived_negatively": false,
              "word": "異性の気を引こうとする"
          }
      ],
      "Extraversion_plus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "言葉数が多い"
          },
          {
              "perceived_negatively": true,
              "word": "めんどくさがりな"
          },
          {
              "perceived_negatively": true,
              "word": "気取った"
          }
      ],
      "Extraversion_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "表現に富む"
          },
          {
              "perceived_negatively": false,
              "word": "率直な"
          },
          {
              "perceived_negatively": false,
              "word": "ドラマティックな"
          },
          {
              "perceived_negatively": false,
              "word": "自発的な"
          },
          {
              "perceived_negatively": false,
              "word": "機知に富んでいる"
          },
          {
              "perceived_negatively": false,
              "word": "機を見るに敏な"
          },
          {
              "perceived_negatively": false,
              "word": "自立している"
          }
      ],
      "Neuroticism_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "感情に流されない"
          },
          {
              "perceived_negatively": true,
              "word": "気配りが苦手な"
          },
          {
              "perceived_negatively": true,
              "word": "よそよそしい"
          },
          {
              "perceived_negatively": true,
              "word": "冷静な"
          }
      ],
      "Neuroticism_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "忍耐強い"
          },
          {
              "perceived_negatively": false,
              "word": "リラックスしている"
          },
          {
              "perceived_negatively": false,
              "word": "多くを要求しない"
          },
          {
              "perceived_negatively": false,
              "word": "現実的な"
          },
          {
              "perceived_negatively": false,
              "word": "楽観的な"
          },
          {
              "perceived_negatively": false,
              "word": "思いやりのある"
          },
          {
              "perceived_negatively": false,
              "word": "批判することを遠慮する"
          },
          {
              "perceived_negatively": false,
              "word": "控えめ"
          }
      ],
      "Neuroticism_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "形式張らない"
          },
          {
              "perceived_negatively": false,
              "word": "地味な"
          }
      ],
      "Neuroticism_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "合理的な"
          },
          {
              "perceived_negatively": false,
              "word": "公平な"
          },
          {
              "perceived_negatively": false,
              "word": "着実な"
          },
          {
              "perceived_negatively": false,
              "word": "論理的"
          },
          {
              "perceived_negatively": false,
              "word": "決定力のある"
          },
          {
              "perceived_negatively": false,
              "word": "落ち着いている"
          },
          {
              "perceived_negatively": false,
              "word": "簡潔な"
          },
          {
              "perceived_negatively": false,
              "word": "徹底している"
          },
          {
              "perceived_negatively": false,
              "word": "経済的な"
          },
          {
              "perceived_negatively": false,
              "word": "自制力がある"
          }
      ],
      "Neuroticism_minus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "高ぶらない"
          },
          {
              "perceived_negatively": true,
              "word": "興奮しない"
          },
          {
              "perceived_negatively": false,
              "word": "穏やかな"
          },
          {
              "perceived_negatively": false,
              "word": "物静かな"
          }
      ],
      "Neuroticism_minus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "気取らない"
          },
          {
              "perceived_negatively": false,
              "word": "物事に飽きない"
          },
          {
              "perceived_negatively": false,
              "word": "不屈な"
          }
      ],
      "Neuroticism_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "沈着な"
          },
          {
              "perceived_negatively": true,
              "word": "気配りが苦手な"
          }
      ],
      "Neuroticism_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "情に厚い"
          },
          {
              "perceived_negatively": false,
              "word": "多芸な"
          },
          {
              "perceived_negatively": false,
              "word": "創造的な"
          },
          {
              "perceived_negatively": false,
              "word": "知的な"
          },
          {
              "perceived_negatively": false,
              "word": "洞察力がある"
          }
      ],
      "Neuroticism_plus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "気まぐれな"
          },
          {
              "perceived_negatively": true,
              "word": "熱くなりやすい"
          },
          {
              "perceived_negatively": true,
              "word": "口論好きの"
          },
          {
              "perceived_negatively": true,
              "word": "性急な"
          },
          {
              "perceived_negatively": true,
              "word": "ご機嫌斜めの"
          },
          {
              "perceived_negatively": true,
              "word": "怒りっぽい"
          },
          {
              "perceived_negatively": true,
              "word": "奇妙な"
          }
      ],
      "Neuroticism_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "情緒的な"
          },
          {
              "perceived_negatively": true,
              "word": "疑うことを知らない"
          },
          {
              "perceived_negatively": false,
              "word": "優しい"
          },
          {
              "perceived_negatively": false,
              "word": "敏感な"
          },
          {
              "perceived_negatively": false,
              "word": "柔和な"
          }
      ],
      "Neuroticism_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "何かをせずにいられない"
          },
          {
              "perceived_negatively": true,
              "word": "おせっかいな"
          },
          {
              "perceived_negatively": true,
              "word": "気ままな"
          },
          {
              "perceived_negatively": true,
              "word": "忘れやすい"
          },
          {
              "perceived_negatively": true,
              "word": "衝動的な"
          }
      ],
      "Neuroticism_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "独特な"
          },
          {
              "perceived_negatively": true,
              "word": "神経質な"
          }
      ],
      "Neuroticism_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "ガードが堅い"
          },
          {
              "perceived_negatively": true,
              "word": "いらいらしやすい"
          },
          {
              "perceived_negatively": true,
              "word": "自分に確信が持てない"
          },
          {
              "perceived_negatively": true,
              "word": "悲観的な"
          },
          {
              "perceived_negatively": false,
              "word": "秘密にしたがる"
          },
          {
              "perceived_negatively": true,
              "word": "心配性の"
          },
          {
              "perceived_negatively": true,
              "word": "ものごとを否定的に捉える"
          },
          {
              "perceived_negatively": false,
              "word": "自分に厳しい"
          }
      ],
      "Neuroticism_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "興奮しやすい"
          },
          {
              "perceived_negatively": true,
              "word": "言葉が多い"
          },
          {
              "perceived_negatively": false,
              "word": "異性の気を引こうとする"
          },
          {
              "perceived_negatively": true,
              "word": "熱くなりやすい"
          },
          {
              "perceived_negatively": false,
              "word": "ひどく気前が良い"
          },
          {
              "perceived_negatively": true,
              "word": "移り気な"
          }
      ],
      "Neuroticism_plus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "すぐに慌ててしまう"
          },
          {
              "perceived_negatively": false,
              "word": "つい腹を立てやすい"
          },
          {
              "perceived_negatively": false,
              "word": "気遣う"
          }
      ],
      "Neuroticism_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "興奮しやすい"
          },
          {
              "perceived_negatively": false,
              "word": "情熱的"
          },
          {
              "perceived_negatively": false,
              "word": "肉感的な"
          }
      ],
      "Openness_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "大雑把な"
          },
          {
              "perceived_negatively": true,
              "word": "機転の利かない"
          },
          {
              "perceived_negatively": true,
              "word": "素っ気ない"
          },
          {
              "perceived_negatively": true,
              "word": "心にゆとりがない"
          },
          {
              "perceived_negatively": true,
              "word": "情にほだされない"
          }
      ],
      "Openness_minus_Agreeableness_plus": [
          {
              "perceived_negatively": true,
              "word": "簡素好きな"
          },
          {
              "perceived_negatively": true,
              "word": "人に頼りがちなの"
          }
      ],
      "Openness_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "目の前のことに専念する"
          },
          {
              "perceived_negatively": false,
              "word": "型破りな"
          },
          {
              "perceived_negatively": true,
              "word": "理屈に拘らない"
          },
          {
              "perceived_negatively": true,
              "word": "子どもっぽい"
          },
          {
              "perceived_negatively": true,
              "word": "ぶっつけ本番、出たとこ勝負の"
          },
          {
              "perceived_negatively": false,
              "word": "曖昧な"
          },
          {
              "perceived_negatively": true,
              "word": "浮ついたところのある"
          }
      ],
      "Openness_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "慣習を重んじる"
          },
          {
              "perceived_negatively": false,
              "word": "伝統を守る"
          }
      ],
      "Openness_minus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "平均的な"
          },
          {
              "perceived_negatively": true,
              "word": "いたって普通な"
          },
          {
              "perceived_negatively": false,
              "word": "気分が沈みがちな"
          },
          {
              "perceived_negatively": true,
              "word": "何事にも関心を持たない"
          },
          {
              "perceived_negatively": true,
              "word": "冒険を好まない"
          }
      ],
      "Openness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "言葉数が多い"
          },
          {
              "perceived_negatively": true,
              "word": "めんどくさがりな"
          },
          {
              "perceived_negatively": true,
              "word": "気取った"
          }
      ],
      "Openness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "沈着な"
          },
          {
              "perceived_negatively": true,
              "word": "気配りが苦手な"
          }
      ],
      "Openness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "すぐに慌ててしまう"
          },
          {
              "perceived_negatively": false,
              "word": "つい腹を立てやすい"
          },
          {
              "perceived_negatively": false,
              "word": "気遣う"
          }
      ],
      "Openness_plus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "鋭敏な"
          },
          {
              "perceived_negatively": false,
              "word": "変わった"
          },
          {
              "perceived_negatively": false,
              "word": "個性的な"
          }
      ],
      "Openness_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "理想家の"
          },
          {
              "perceived_negatively": false,
              "word": "駆引きがうまい"
          },
          {
              "perceived_negatively": false,
              "word": "深みがある"
          },
          {
              "perceived_negatively": false,
              "word": "如才ない"
          },
          {
              "perceived_negatively": false,
              "word": "愛想の良い"
          }
      ],
      "Openness_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "慣例にとらわれない"
          },
          {
              "perceived_negatively": false,
              "word": "奇抜な"
          }
      ],
      "Openness_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "分析好きな"
          },
          {
              "perceived_negatively": false,
              "word": "明敏な"
          },
          {
              "perceived_negatively": false,
              "word": "物知りな"
          },
          {
              "perceived_negatively": false,
              "word": "明確に述べる"
          },
          {
              "perceived_negatively": false,
              "word": "品位がある"
          },
          {
              "perceived_negatively": false,
              "word": "教養がある"
          }
      ],
      "Openness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "内省的な"
          },
          {
              "perceived_negatively": false,
              "word": "よく瞑想にふける"
          },
          {
              "perceived_negatively": false,
              "word": "熟考する"
          },
          {
              "perceived_negatively": false,
              "word": "自省する"
          },
          {
              "perceived_negatively": false,
              "word": "内部志向型な"
          }
      ],
      "Openness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "世知に長けた"
          },
          {
              "perceived_negatively": false,
              "word": "劇場的な"
          },
          {
              "perceived_negatively": false,
              "word": "雄弁な"
          },
          {
              "perceived_negatively": false,
              "word": "探究的な"
          },
          {
              "perceived_negatively": false,
              "word": "情熱的な"
          }
      ],
      "Openness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "創造的な"
          },
          {
              "perceived_negatively": false,
              "word": "知的な"
          },
          {
              "perceived_negatively": false,
              "word": "洞察力がある"
          },
          {
              "perceived_negatively": false,
              "word": "多芸な"
          },
          {
              "perceived_negatively": false,
              "word": "創造性がある"
          }
      ],
      "Openness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "情熱的"
          },
          {
              "perceived_negatively": false,
              "word": "興奮しやすい"
          },
          {
              "perceived_negatively": false,
              "word": "肉感的な"
          }
      ]
  },
  "values": {
      "Hedonism": [
          {
              "Term": "生活を楽しむこと",
              "LowDescription": "単なる個人の楽しみよりも大きな目標を伴う行動を優先します",
              "HighDescription": "人生を最大限に楽しもうとしています"
          }
      ],
      "Self-transcendence": [
          {
              "Term": "他人への支援",
              "LowDescription": "人は干渉されずに自分で物事に対処できると思われています",
              "HighDescription": "自分のまわりの人々を世話することは重要であると考えます"
          },
          {
              "Term": "公平",
              "LowDescription": "人は自ら機会を作っていくものと信じます",
              "HighDescription": "社会正義と全ての人の平等を信じます"
          },
          {
              "Term": "社会正義",
              "LowDescription": "人は自ら機会を作っていくものと信じます",
              "HighDescription": "社会正義と全ての人の平等を信じます"
          },
          {
              "Term": "平等",
              "LowDescription": "人は自ら機会を作っていくものと信じます",
              "HighDescription": "社会正義と全ての人の平等を信じます"
          },
          {
              "Term": "コミュニティ・サービス",
              "LowDescription": "干渉されずに自分で物事に対処できると思われています",
              "HighDescription": "自分のまわりの人々を世話することは重要であると考えます"
          }
      ],
      "Conservation": [
          {
              "Term": "伝統",
              "LowDescription": "人が通った道よりもわが道を行くことを大切にします",
              "HighDescription": "自分が属するグループに敬意を払い、それらのガイダンスに従います"
          },
          {
              "Term": "調和",
              "LowDescription": "何が正しいか、他人がどう思うかではなく、自分の信条で決定します",
              "HighDescription": "規則は理由があって存在すると知っており、それらを破らないようにしています"
          },
          {
              "Term": "謙虚",
              "LowDescription": "何が正しいか、他人がどう思うかではなく、自分の信条で決定します",
              "HighDescription": "他人に従うことに価値を見出します"
          },
          {
              "Term": "社会規範",
              "LowDescription": "何が正しいか、他人がどう思うかではなく、自分の信条で決定します",
              "HighDescription": "規則は理由があって存在すると知っており、それらを破らないようにしています"
          },
          {
              "Term": "セキュリティー",
              "LowDescription": "目的を達成するためにはセキュリティーが犠牲になってもよいと信じます",
              "HighDescription": "安全性とセキュリティーは守るべき重要なものであると信じます"
          },
          {
              "Term": "安全性",
              "LowDescription": "目的を達成するためには安全性が犠牲になってもよいと信じます",
              "HighDescription": "安全性とセキュリティは守るべき重要なものであると信じます"
          }
      ],
      "Openness-to-change": [
          {
              "Term": "自主性",
              "LowDescription": "他人が自分の行動の指揮をとることを受け入れます",
              "HighDescription": "最高の成果が得られるよう、自分自身で目標を設定する傾向があります"
          },
          {
              "Term": "興奮",
              "LowDescription": "危険を冒して新しいことに挑むより、悪くないと分かっていることを選びます",
              "HighDescription": "新しく刺激的な経験をすることを熱望しています"
          },
          {
              "Term": "創造性",
              "LowDescription": "危険を冒して新しいことに挑むより、悪くないと分かっていることを選びます",
              "HighDescription": "新しく刺激的な経験をすることを熱望しています"
          },
          {
              "Term": "好奇心",
              "LowDescription": "危険を冒して新しいことに挑むより、悪くないと分かっていることを選びます",
              "HighDescription": "新しく刺激的な経験をすることを熱望しています"
          },
          {
              "Term": "主体性",
              "LowDescription": "他人が自分の行動の指揮をとることを受け入れます",
              "HighDescription": "最高の成果が得られるよう、自分自身で目標を設定する傾向があります"
          },
          {
              "Term": "自由",
              "LowDescription": "他人が自分の行動の指揮をとることを受け入れます",
              "HighDescription": "最高の成果が得られるよう、自分自身で目標を設定する傾向があります"
          }
      ],
      "Self-enhancement": [
          {
              "Term": "成功すること",
              "LowDescription": "自分の才能を誇示することにあまり拘らず意思決定します",
              "HighDescription": "自分自身を向上させ、自分が有能な人であることを実証する機会を探しています"
          },
          {
              "Term": "社会的地位の獲得",
              "LowDescription": "社会的地位に満足していて、それ以上を強くは望んでいません",
              "HighDescription": "自分の地位と世間体を向上するために相当な努力を行います"
          },
          {
              "Term": "野心",
              "LowDescription": "社会的地位に満足していて、それ以上を強くは望んでいません",
              "HighDescription": "ゴールへ突き進むことが重要であると感じます"
          },
          {
              "Term": "大成功",
              "LowDescription": "自分の才能を誇示することにあまり拘らず意思決定します",
              "HighDescription": "自分自身を向上させ、自分が有能な人であることを実証する機会を探しています"
          }
      ]
  }
}

},{}],4:[function(require,module,exports){
module.exports={
  "facets": {
    "facet_intellect": {
      "LowTerm": "Concrete",
      "HighDescription": "You are open to and intrigued by new ideas and love to explore them",
      "HighTerm": "Philosophical",
      "LowDescription": "You prefer dealing with the world as it is, rarely considering abstract ideas",
      "Big5": "big5_openness"
    },
    "facet_gregariousness": {
      "LowTerm": "Independent",
      "HighDescription": "You enjoy being in the company of others",
      "HighTerm": "Sociable",
      "LowDescription": "You have a strong desire to have time to yourself",
      "Big5": "big5_extraversion"
    },
    "facet_achievement_striving": {
      "LowTerm": "Content",
      "HighDescription": "You have high goals for yourself and work hard to achieve them",
      "HighTerm": "Driven",
      "LowDescription": "You are content with your level of accomplishment and do not feel the need to set ambitious goals",
      "Big5": "big5_conscientiousness"
    },
    "facet_depression": {
      "LowTerm": "Content",
      "HighDescription": "You think quite often about the things you are unhappy about",
      "HighTerm": "Melancholy",
      "LowDescription": "You are generally comfortable with yourself as you are",
      "Big5": "big5_neuroticism"
    },
    "facet_sympathy": {
      "LowTerm": "Hardened",
      "HighDescription": "You feel what others feel and are compassionate towards them",
      "HighTerm": "Empathetic",
      "LowDescription": "You think that people should generally rely more on themselves than on other people",
      "Big5": "big5_agreeableness"
    },
    "facet_imagination": {
      "LowTerm": "Down-to-earth",
      "HighDescription": "You have a wild imagination",
      "HighTerm": "Imaginative",
      "LowDescription": "You prefer facts over fantasy",
      "Big5": "big5_openness"
    },
    "facet_self_discipline": {
      "LowTerm": "Intermittent",
      "HighDescription": "You can tackle and stick with tough tasks",
      "HighTerm": "Persistent",
      "LowDescription": "You have a hard time sticking with difficult tasks for a long period of time",
      "Big5": "big5_conscientiousness"
    },
    "facet_assertiveness": {
      "LowTerm": "Demure",
      "HighDescription": "You tend to speak up and take charge of situations, and you are comfortable leading groups",
      "HighTerm": "Assertive",
      "LowDescription": "You prefer to listen than to talk, especially in group situations",
      "Big5": "big5_extraversion"
    },
    "facet_cheerfulness": {
      "LowTerm": "Solemn",
      "HighDescription": "You are a joyful person and share that joy with the world",
      "HighTerm": "Cheerful",
      "LowDescription": "You are generally serious and do not joke much",
      "Big5": "big5_extraversion"
    },
    "facet_self_efficacy": {
      "LowTerm": "Self-doubting",
      "HighDescription": "You feel you have the ability to succeed in the tasks you set out to do",
      "HighTerm": "Self-assured",
      "LowDescription": "You frequently doubt your ability to achieve your goals",
      "Big5": "big5_conscientiousness"
    },
    "facet_morality": {
      "LowTerm": "Compromising",
      "HighDescription": "You think it is wrong to take advantage of others to get ahead",
      "HighTerm": "Uncompromising",
      "LowDescription": "You are comfortable using every trick in the book to get what you want",
      "Big5": "big5_agreeableness"
    },
    "facet_liberalism": {
      "LowTerm": "Respectful of authority",
      "HighDescription": "You prefer to challenge authority and traditional values to help bring about positive changes",
      "HighTerm": "Authority-challenging",
      "LowDescription": "You prefer following with tradition in order to maintain a sense of stability",
      "Big5": "big5_openness"
    },
    "facet_altruism": {
      "LowTerm": "Self-focused",
      "HighDescription": "You feel fulfilled when helping others, and will go out of your way to do so",
      "HighTerm": "Altruistic",
      "LowDescription": "You are more concerned with taking care of yourself than taking time for others",
      "Big5": "big5_agreeableness"
    },
    "facet_self_consciousness": {
      "LowTerm": "Confident",
      "HighDescription": "You are sensitive about what others might be thinking about you",
      "HighTerm": "Self-conscious",
      "LowDescription": "You are hard to embarrass and are self-confident most of the time",
      "Big5": "big5_neuroticism"
    },
    "facet_vulnerability": {
      "LowTerm": "Calm under pressure",
      "HighDescription": "You are easily overwhelmed in stressful situations",
      "HighTerm": "Susceptible to stress",
      "LowDescription": "You handle unexpected events calmly and effectively",
      "Big5": "big5_neuroticism"
    },
    "facet_trust": {
      "LowTerm": "Cautious of others",
      "HighDescription": "You believe the best in others and trust people easily",
      "HighTerm": "Trusting of others",
      "LowDescription": "You are wary of other people's intentions and do not trust easily",
      "Big5": "big5_agreeableness"
    },
    "facet_orderliness": {
      "LowTerm": "Unstructured",
      "HighDescription": "You feel a strong need for structure in your life",
      "HighTerm": "Organized",
      "LowDescription": "You do not make a lot of time for organization in your daily life",
      "Big5": "big5_conscientiousness"
    },
    "facet_anxiety": {
      "LowTerm": "Self-assured",
      "HighDescription": "You tend to worry about things that might happen",
      "HighTerm": "Prone to worry",
      "LowDescription": "You tend to feel calm and self-assured",
      "Big5": "big5_neuroticism"
    },
    "facet_friendliness": {
      "LowTerm": "Reserved",
      "HighDescription": "You make friends easily and feel comfortable around other people",
      "HighTerm": "Outgoing",
      "LowDescription": "You are a private person and don't let many people in",
      "Big5": "big5_extraversion"
    },
    "facet_modesty": {
      "LowTerm": "Proud",
      "HighDescription": "You are uncomfortable being the center of attention",
      "HighTerm": "Modest",
      "LowDescription": "You hold yourself in high regard, satisfied with who you are",
      "Big5": "big5_agreeableness"
    },
    "facet_activity_level": {
      "LowTerm": "Laid-back",
      "HighDescription": "You enjoy a fast-paced, busy schedule with many activities",
      "HighTerm": "Energetic",
      "LowDescription": "You appreciate a relaxed pace in life",
      "Big5": "big5_extraversion"
    },
    "facet_cautiousness": {
      "LowTerm": "Bold",
      "HighDescription": "You carefully think through decisions before making them",
      "HighTerm": "Deliberate",
      "LowDescription": "You would rather take action immediately than spend time deliberating making a decision",
      "Big5": "big5_conscientiousness"
    },
    "facet_dutifulness": {
      "LowTerm": "Carefree",
      "HighDescription": "You take rules and obligations seriously, even when they're inconvenient",
      "HighTerm": "Dutiful",
      "LowDescription": "You do what you want, disregarding rules and obligations",
      "Big5": "big5_conscientiousness"
    },
    "facet_artistic_interests": {
      "LowTerm": "Unconcerned with art",
      "HighDescription": "You enjoy beauty and seek out creative experiences",
      "HighTerm": "Appreciative of art",
      "LowDescription": "You are less concerned with artistic or creative activities than most people who participated in our surveys",
      "Big5": "big5_openness"
    },
    "facet_immoderation": {
      "LowTerm": "Self-controlled",
      "HighDescription": "You feel your desires strongly and are easily tempted by them",
      "HighTerm": "Hedonistic",
      "LowDescription": "You have control over your desires, which are not particularly intense",
      "Big5": "big5_neuroticism"
    },
    "facet_emotionality": {
      "LowTerm": "Dispassionate",
      "HighDescription": "You are aware of your feelings and how to express them",
      "HighTerm": "Emotionally aware",
      "LowDescription": "You do not frequently think about or openly express your emotions",
      "Big5": "big5_openness"
    },
    "facet_adventurousness": {
      "LowTerm": "Consistent",
      "HighDescription": "You are eager to experience new things",
      "HighTerm": "Adventurous",
      "LowDescription": "You enjoy familiar routines and prefer not to deviate from them",
      "Big5": "big5_openness"
    },
    "facet_anger": {
      "LowTerm": "Mild-tempered",
      "HighDescription": "You have a fiery temper, especially when things do not go your way",
      "HighTerm": "Fiery",
      "LowDescription": "It takes a lot to get you angry",
      "Big5": "big5_neuroticism"
    },
    "facet_excitement_seeking": {
      "LowTerm": "Calm-seeking",
      "HighDescription": "You are excited by taking risks and feel bored without lots of action going on",
      "HighTerm": "Excitement-seeking",
      "LowDescription": "You prefer activities that are quiet, calm, and safe",
      "Big5": "big5_extraversion"
    },
    "facet_cooperation": {
      "LowTerm": "Contrary",
      "HighDescription": "You are easy to please and try to avoid confrontation",
      "HighTerm": "Accommodating",
      "LowDescription": "You do not shy away from contradicting others",
      "Big5": "big5_agreeableness"
    }
  },
  "needs": {
    "need_practicality": [
      "efficiency",
      "practicality",
      "high value",
      "convenience"
    ],
    "need_curiosity": [
      "discovery",
      "mastery",
      "gaining knowledge"
    ],
    "need_stability": [
      "stability",
      "authenticity",
      "trustworthiness"
    ],
    "need_self_expression": [
      "self-expression",
      "personal empowerment",
      "personal strength"
    ],
    "need_structure": [
      "organization",
      "straightforwardness",
      "clarity",
      "reliability"
    ],
    "need_challenge": [
      "prestige",
      "competition",
      "glory"
    ],
    "need_liberty": [
      "modernity",
      "expanding possibility",
      "escape",
      "spontaneity",
      "novelty"
    ],
    "need_harmony": [
      "well-being",
      "courtesy",
      "politeness"
    ],
    "need_love": [
      "connectedness",
      "affinity"
    ],
    "need_excitement": [
      "revelry",
      "anticipation",
      "exhiliration"
    ],
    "need_ideal": [
      "sophistication",
      "spirituality",
      "superiority",
      "fulfillment"
    ],
    "need_closeness": [
      "belongingness",
      "nostalgia",
      "intimacy"
    ]
  },
  "phrases": {
    "Experiences that give a sense of %s hold some appeal to you": "Experiences that give a sense of %s hold some appeal to you",
    "You consider %s to guide a large part of what you do": "You consider %s to guide a large part of what you do",
    "You value both %s a bit": "You value both %s a bit",
    "And %s": "And %s",
    "And you are %s": "And you are %s",
    "a bit %s": "a bit %s",
    "can be perceived as %s": "can be perceived as %s",
    "You are relatively unconcerned with both %s and %s": "You are relatively unconcerned with both %s and %s",
    "You are %s and %s": "You are %s and %s",
    "You value both %s and %s a bit": "You value both %s and %s a bit",
    "You don't find %s to be particularly motivating for you": "You don't find %s to be particularly motivating for you",
    "You are %s": "You are %s",
    "You are %s, %s and %s": "You are %s, %s and %s",
    "Your choices are driven by a desire for %s": "Your choices are driven by a desire for %s",
    "You are motivated to seek out experiences that provide a strong feeling of %s": "You are motivated to seek out experiences that provide a strong feeling of %s",
    "Experiences that make you feel high %s are generally unappealing to you": "Experiences that make you feel high %s are generally unappealing to you",
    "You don't find either %s or %s to be particularly motivating for you": "You don't find either %s or %s to be particularly motivating for you",
    "You are relatively unconcerned with %s": "You are relatively unconcerned with %s",
    "somewhat %s": "somewhat %s",
    "You value %s a bit more": "You value %s a bit more",
    "You consider both %s and %s to guide a large part of what you do": "You consider both %s and %s to guide a large part of what you do"
  },
  "traits": {
    "big5_conscientiousness_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "stern"
      },
      {
        "perceived_negatively": false,
        "word": "strict"
      },
      {
        "perceived_negatively": false,
        "word": "rigid"
      }
    ],
    "big5_neuroticism_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "guarded"
      },
      {
        "perceived_negatively": true,
        "word": "fretful"
      },
      {
        "perceived_negatively": true,
        "word": "insecure"
      },
      {
        "perceived_negatively": true,
        "word": "pessimistic"
      },
      {
        "perceived_negatively": false,
        "word": "secretive"
      },
      {
        "perceived_negatively": true,
        "word": "fearful"
      },
      {
        "perceived_negatively": true,
        "word": "negativistic"
      },
      {
        "perceived_negatively": false,
        "word": "self-critical"
      }
    ],
    "big5_agreeableness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": true,
        "word": "insensitive"
      },
      {
        "perceived_negatively": true,
        "word": "unaffectionate"
      },
      {
        "perceived_negatively": true,
        "word": "passionless"
      },
      {
        "perceived_negatively": true,
        "word": "unemotional"
      }
    ],
    "big5_agreeableness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "sentimental"
      },
      {
        "perceived_negatively": false,
        "word": "affectionate"
      },
      {
        "perceived_negatively": false,
        "word": "sensitive"
      },
      {
        "perceived_negatively": false,
        "word": "soft"
      },
      {
        "perceived_negatively": false,
        "word": "passionate"
      },
      {
        "perceived_negatively": false,
        "word": "romantic"
      }
    ],
    "big5_conscientiousness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "informal"
      },
      {
        "perceived_negatively": false,
        "word": "low-key"
      }
    ],
    "big5_agreeableness_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "unpretentious"
      },
      {
        "perceived_negatively": false,
        "word": "self-effacing"
      }
    ],
    "big5_conscientiousness_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "dependable"
      },
      {
        "perceived_negatively": false,
        "word": "responsible"
      },
      {
        "perceived_negatively": false,
        "word": "reliable"
      },
      {
        "perceived_negatively": false,
        "word": "mannerly"
      },
      {
        "perceived_negatively": false,
        "word": "considerate"
      }
    ],
    "big5_agreeableness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "bullheaded"
      },
      {
        "perceived_negatively": true,
        "word": "abrupt"
      },
      {
        "perceived_negatively": true,
        "word": "crude"
      },
      {
        "perceived_negatively": true,
        "word": "combative"
      },
      {
        "perceived_negatively": true,
        "word": "rough"
      },
      {
        "perceived_negatively": false,
        "word": "sly"
      },
      {
        "perceived_negatively": true,
        "word": "manipulative"
      },
      {
        "perceived_negatively": true,
        "word": "gruff"
      },
      {
        "perceived_negatively": true,
        "word": "devious"
      }
    ],
    "big5_neuroticism_plus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "easily rattled"
      },
      {
        "perceived_negatively": false,
        "word": "easily irked"
      },
      {
        "perceived_negatively": false,
        "word": "apprehensive"
      }
    ],
    "big5_openness_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": true,
        "word": "simple"
      },
      {
        "perceived_negatively": true,
        "word": "dependent"
      }
    ],
    "big5_neuroticism_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "imperturbable"
      },
      {
        "perceived_negatively": true,
        "word": "insensitive"
      }
    ],
    "big5_agreeableness_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "inconsiderate"
      },
      {
        "perceived_negatively": true,
        "word": "impolite"
      },
      {
        "perceived_negatively": true,
        "word": "distrustful"
      },
      {
        "perceived_negatively": true,
        "word": "uncooperative"
      },
      {
        "perceived_negatively": true,
        "word": "thoughtless"
      }
    ],
    "big5_extraversion_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "active"
      },
      {
        "perceived_negatively": false,
        "word": "competitive"
      },
      {
        "perceived_negatively": false,
        "word": "persistent"
      },
      {
        "perceived_negatively": false,
        "word": "ambitious"
      },
      {
        "perceived_negatively": false,
        "word": "purposeful"
      }
    ],
    "big5_agreeableness_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "strict"
      },
      {
        "perceived_negatively": false,
        "word": "rigid"
      },
      {
        "perceived_negatively": true,
        "word": "stern"
      }
    ],
    "big5_neuroticism_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "patient"
      },
      {
        "perceived_negatively": false,
        "word": "relaxed"
      },
      {
        "perceived_negatively": false,
        "word": "undemanding"
      },
      {
        "perceived_negatively": false,
        "word": "down-to-earth"
      },
      {
        "perceived_negatively": false,
        "word": "optimistic"
      },
      {
        "perceived_negatively": false,
        "word": "conceitless"
      },
      {
        "perceived_negatively": false,
        "word": "uncritical"
      },
      {
        "perceived_negatively": false,
        "word": "unpretentious"
      }
    ],
    "big5_openness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "predictable"
      },
      {
        "perceived_negatively": true,
        "word": "unimaginative"
      },
      {
        "perceived_negatively": false,
        "word": "somber"
      },
      {
        "perceived_negatively": true,
        "word": "apathetic"
      },
      {
        "perceived_negatively": true,
        "word": "unadventurous"
      }
    ],
    "big5_extraversion_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "opinionated"
      },
      {
        "perceived_negatively": true,
        "word": "forceful"
      },
      {
        "perceived_negatively": true,
        "word": "domineering"
      },
      {
        "perceived_negatively": true,
        "word": "boastful"
      },
      {
        "perceived_negatively": true,
        "word": "bossy"
      },
      {
        "perceived_negatively": false,
        "word": "dominant"
      },
      {
        "perceived_negatively": false,
        "word": "cunning"
      }
    ],
    "big5_neuroticism_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "temperamental"
      },
      {
        "perceived_negatively": true,
        "word": "irritable"
      },
      {
        "perceived_negatively": true,
        "word": "quarrelsome"
      },
      {
        "perceived_negatively": true,
        "word": "impatient"
      },
      {
        "perceived_negatively": true,
        "word": "grumpy"
      },
      {
        "perceived_negatively": true,
        "word": "crabby"
      },
      {
        "perceived_negatively": true,
        "word": "cranky"
      }
    ],
    "big5_neuroticism_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": true,
        "word": "wordy"
      },
      {
        "perceived_negatively": false,
        "word": "flirtatious"
      },
      {
        "perceived_negatively": true,
        "word": "explosive"
      },
      {
        "perceived_negatively": false,
        "word": "extravagant"
      },
      {
        "perceived_negatively": true,
        "word": "volatile"
      }
    ],
    "big5_agreeableness_minus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "coarse"
      },
      {
        "perceived_negatively": true,
        "word": "tactless"
      },
      {
        "perceived_negatively": true,
        "word": "curt"
      },
      {
        "perceived_negatively": true,
        "word": "narrow-minded"
      },
      {
        "perceived_negatively": true,
        "word": "callous"
      },
      {
        "perceived_negatively": true,
        "word": "ruthless"
      },
      {
        "perceived_negatively": true,
        "word": "uncharitable"
      },
      {
        "perceived_negatively": true,
        "word": "vindictive"
      }
    ],
    "big5_conscientiousness_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "unpretentious"
      },
      {
        "perceived_negatively": false,
        "word": "self-effacing"
      }
    ],
    "big5_agreeableness_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "genial"
      },
      {
        "perceived_negatively": false,
        "word": "tactful"
      },
      {
        "perceived_negatively": false,
        "word": "diplomatic"
      },
      {
        "perceived_negatively": false,
        "word": "deep"
      },
      {
        "perceived_negatively": false,
        "word": "idealistic"
      }
    ],
    "big5_agreeableness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "critical"
      },
      {
        "perceived_negatively": true,
        "word": "selfish"
      },
      {
        "perceived_negatively": true,
        "word": "ill-tempered"
      },
      {
        "perceived_negatively": true,
        "word": "antagonistic"
      },
      {
        "perceived_negatively": true,
        "word": "grumpy"
      },
      {
        "perceived_negatively": true,
        "word": "bitter"
      },
      {
        "perceived_negatively": true,
        "word": "disagreeable"
      },
      {
        "perceived_negatively": true,
        "word": "demanding"
      }
    ],
    "big5_openness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "imperturbable"
      },
      {
        "perceived_negatively": true,
        "word": "insensitive"
      }
    ],
    "big5_conscientiousness_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "sophisticated"
      },
      {
        "perceived_negatively": false,
        "word": "perfectionistic"
      },
      {
        "perceived_negatively": false,
        "word": "industrious"
      },
      {
        "perceived_negatively": false,
        "word": "dignified"
      },
      {
        "perceived_negatively": false,
        "word": "refined"
      },
      {
        "perceived_negatively": false,
        "word": "cultured"
      },
      {
        "perceived_negatively": false,
        "word": "foresighted"
      }
    ],
    "big5_agreeableness_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "shrewd"
      },
      {
        "perceived_negatively": false,
        "word": "eccentric"
      },
      {
        "perceived_negatively": false,
        "word": "individualistic"
      }
    ],
    "big5_neuroticism_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": false,
        "word": "passionate"
      },
      {
        "perceived_negatively": false,
        "word": "sensual"
      }
    ],
    "big5_neuroticism_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "heartfelt"
      },
      {
        "perceived_negatively": false,
        "word": "versatile"
      },
      {
        "perceived_negatively": false,
        "word": "creative"
      },
      {
        "perceived_negatively": false,
        "word": "intellectual"
      },
      {
        "perceived_negatively": false,
        "word": "insightful"
      }
    ],
    "big5_openness_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "conventional"
      },
      {
        "perceived_negatively": false,
        "word": "traditional"
      }
    ],
    "big5_extraversion_plus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "verbose"
      },
      {
        "perceived_negatively": true,
        "word": "unscrupulous"
      },
      {
        "perceived_negatively": true,
        "word": "pompous"
      }
    ],
    "big5_extraversion_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "inner-directed"
      },
      {
        "perceived_negatively": false,
        "word": "introspective"
      },
      {
        "perceived_negatively": false,
        "word": "meditative"
      },
      {
        "perceived_negatively": false,
        "word": "contemplating"
      },
      {
        "perceived_negatively": false,
        "word": "self-examining"
      }
    ],
    "big5_openness_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "shortsighted"
      },
      {
        "perceived_negatively": false,
        "word": "foolhardy"
      },
      {
        "perceived_negatively": true,
        "word": "illogical"
      },
      {
        "perceived_negatively": true,
        "word": "immature"
      },
      {
        "perceived_negatively": true,
        "word": "haphazard"
      },
      {
        "perceived_negatively": false,
        "word": "lax"
      },
      {
        "perceived_negatively": true,
        "word": "flippant"
      }
    ],
    "big5_extraversion_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "tranquil"
      },
      {
        "perceived_negatively": false,
        "word": "sedate"
      },
      {
        "perceived_negatively": false,
        "word": "placid"
      },
      {
        "perceived_negatively": false,
        "word": "impartial"
      },
      {
        "perceived_negatively": false,
        "word": "unassuming"
      },
      {
        "perceived_negatively": false,
        "word": "acquiescent"
      }
    ],
    "big5_conscientiousness_plus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "traditional"
      },
      {
        "perceived_negatively": false,
        "word": "conventional"
      }
    ],
    "big5_openness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "creative"
      },
      {
        "perceived_negatively": false,
        "word": "intellectual"
      },
      {
        "perceived_negatively": false,
        "word": "insightful"
      },
      {
        "perceived_negatively": false,
        "word": "versatile"
      },
      {
        "perceived_negatively": false,
        "word": "inventive"
      }
    ],
    "big5_agreeableness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "soft-hearted"
      },
      {
        "perceived_negatively": false,
        "word": "agreeable"
      },
      {
        "perceived_negatively": false,
        "word": "obliging"
      },
      {
        "perceived_negatively": false,
        "word": "humble"
      },
      {
        "perceived_negatively": true,
        "word": "lenient"
      }
    ],
    "big5_extraversion_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "indirect"
      },
      {
        "perceived_negatively": true,
        "word": "unenergetic"
      },
      {
        "perceived_negatively": true,
        "word": "sluggish"
      },
      {
        "perceived_negatively": true,
        "word": "nonpersistent"
      },
      {
        "perceived_negatively": true,
        "word": "vague"
      }
    ],
    "big5_openness_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "analytical"
      },
      {
        "perceived_negatively": false,
        "word": "perceptive"
      },
      {
        "perceived_negatively": false,
        "word": "informative"
      },
      {
        "perceived_negatively": false,
        "word": "articulate"
      },
      {
        "perceived_negatively": false,
        "word": "dignified"
      },
      {
        "perceived_negatively": false,
        "word": "cultured"
      }
    ],
    "big5_openness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "verbose"
      },
      {
        "perceived_negatively": true,
        "word": "unscrupulous"
      },
      {
        "perceived_negatively": true,
        "word": "pompous"
      }
    ],
    "big5_conscientiousness_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "rash"
      },
      {
        "perceived_negatively": true,
        "word": "uncooperative"
      },
      {
        "perceived_negatively": true,
        "word": "unreliable"
      },
      {
        "perceived_negatively": true,
        "word": "distrustful"
      },
      {
        "perceived_negatively": true,
        "word": "thoughtless"
      }
    ],
    "big5_agreeableness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "generous"
      },
      {
        "perceived_negatively": false,
        "word": "pleasant"
      },
      {
        "perceived_negatively": false,
        "word": "tolerant"
      },
      {
        "perceived_negatively": false,
        "word": "peaceful"
      },
      {
        "perceived_negatively": false,
        "word": "flexible"
      },
      {
        "perceived_negatively": false,
        "word": "easy-going"
      },
      {
        "perceived_negatively": false,
        "word": "fair"
      },
      {
        "perceived_negatively": false,
        "word": "charitable"
      },
      {
        "perceived_negatively": false,
        "word": "trustful"
      }
    ],
    "big5_openness_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "shrewd"
      },
      {
        "perceived_negatively": false,
        "word": "eccentric"
      },
      {
        "perceived_negatively": false,
        "word": "individualistic"
      }
    ],
    "big5_conscientiousness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "ambitious"
      },
      {
        "perceived_negatively": false,
        "word": "alert"
      },
      {
        "perceived_negatively": false,
        "word": "firm"
      },
      {
        "perceived_negatively": false,
        "word": "purposeful"
      },
      {
        "perceived_negatively": false,
        "word": "competitive"
      }
    ],
    "big5_openness_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "idealistic"
      },
      {
        "perceived_negatively": false,
        "word": "diplomatic"
      },
      {
        "perceived_negatively": false,
        "word": "deep"
      },
      {
        "perceived_negatively": false,
        "word": "tactful"
      },
      {
        "perceived_negatively": false,
        "word": "genial"
      }
    ],
    "big5_conscientiousness_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "foolhardy"
      },
      {
        "perceived_negatively": true,
        "word": "illogical"
      },
      {
        "perceived_negatively": true,
        "word": "immature"
      },
      {
        "perceived_negatively": true,
        "word": "haphazard"
      },
      {
        "perceived_negatively": false,
        "word": "lax"
      },
      {
        "perceived_negatively": true,
        "word": "flippant"
      }
    ],
    "big5_conscientiousness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "particular"
      },
      {
        "perceived_negatively": true,
        "word": "high-strung"
      }
    ],
    "big5_neuroticism_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "unselfconscious"
      },
      {
        "perceived_negatively": false,
        "word": "weariless"
      },
      {
        "perceived_negatively": false,
        "word": "indefatigable"
      }
    ],
    "big5_openness_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "coarse"
      },
      {
        "perceived_negatively": true,
        "word": "tactless"
      },
      {
        "perceived_negatively": true,
        "word": "curt"
      },
      {
        "perceived_negatively": true,
        "word": "narrow-minded"
      },
      {
        "perceived_negatively": true,
        "word": "callous"
      }
    ],
    "big5_neuroticism_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "emotional"
      },
      {
        "perceived_negatively": true,
        "word": "gullible"
      },
      {
        "perceived_negatively": false,
        "word": "affectionate"
      },
      {
        "perceived_negatively": false,
        "word": "sensitive"
      },
      {
        "perceived_negatively": false,
        "word": "soft"
      }
    ],
    "big5_extraversion_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "unaggressive"
      },
      {
        "perceived_negatively": false,
        "word": "humble"
      },
      {
        "perceived_negatively": false,
        "word": "submissive"
      },
      {
        "perceived_negatively": false,
        "word": "timid"
      },
      {
        "perceived_negatively": false,
        "word": "compliant"
      },
      {
        "perceived_negatively": false,
        "word": "naïve"
      }
    ],
    "big5_agreeableness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "effervescent"
      },
      {
        "perceived_negatively": false,
        "word": "happy"
      },
      {
        "perceived_negatively": false,
        "word": "friendly"
      },
      {
        "perceived_negatively": false,
        "word": "merry"
      },
      {
        "perceived_negatively": false,
        "word": "jovial"
      },
      {
        "perceived_negatively": false,
        "word": "humorous"
      }
    ],
    "big5_openness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "worldly"
      },
      {
        "perceived_negatively": false,
        "word": "theatrical"
      },
      {
        "perceived_negatively": false,
        "word": "eloquent"
      },
      {
        "perceived_negatively": false,
        "word": "inquisitive"
      },
      {
        "perceived_negatively": false,
        "word": "intense"
      }
    ],
    "big5_extraversion_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "somber"
      },
      {
        "perceived_negatively": true,
        "word": "meek"
      },
      {
        "perceived_negatively": true,
        "word": "unadventurous"
      },
      {
        "perceived_negatively": false,
        "word": "passive"
      },
      {
        "perceived_negatively": true,
        "word": "apathetic"
      },
      {
        "perceived_negatively": false,
        "word": "docile"
      }
    ],
    "big5_extraversion_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "restrained"
      },
      {
        "perceived_negatively": false,
        "word": "serious"
      },
      {
        "perceived_negatively": false,
        "word": "discreet"
      },
      {
        "perceived_negatively": false,
        "word": "cautious"
      },
      {
        "perceived_negatively": false,
        "word": "principled"
      }
    ],
    "big5_neuroticism_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "unassuming"
      },
      {
        "perceived_negatively": true,
        "word": "unexcitable"
      },
      {
        "perceived_negatively": false,
        "word": "placid"
      },
      {
        "perceived_negatively": false,
        "word": "tranquil"
      }
    ],
    "big5_extraversion_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "explosive"
      },
      {
        "perceived_negatively": true,
        "word": "wordy"
      },
      {
        "perceived_negatively": false,
        "word": "extravagant"
      },
      {
        "perceived_negatively": true,
        "word": "volatile"
      },
      {
        "perceived_negatively": false,
        "word": "flirtatious"
      }
    ],
    "big5_extraversion_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "expressive"
      },
      {
        "perceived_negatively": false,
        "word": "candid"
      },
      {
        "perceived_negatively": false,
        "word": "dramatic"
      },
      {
        "perceived_negatively": false,
        "word": "spontaneous"
      },
      {
        "perceived_negatively": false,
        "word": "witty"
      },
      {
        "perceived_negatively": false,
        "word": "opportunistic"
      },
      {
        "perceived_negatively": false,
        "word": "independent"
      }
    ],
    "big5_conscientiousness_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "unconventional"
      },
      {
        "perceived_negatively": false,
        "word": "quirky"
      }
    ],
    "big5_extraversion_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "skeptical"
      },
      {
        "perceived_negatively": false,
        "word": "wary of others"
      },
      {
        "perceived_negatively": true,
        "word": "seclusive"
      },
      {
        "perceived_negatively": true,
        "word": "uncommunicative"
      },
      {
        "perceived_negatively": true,
        "word": "unsociable"
      },
      {
        "perceived_negatively": true,
        "word": "glum"
      },
      {
        "perceived_negatively": true,
        "word": "detached"
      },
      {
        "perceived_negatively": false,
        "word": "aloof"
      }
    ],
    "big5_conscientiousness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "scatterbrained"
      },
      {
        "perceived_negatively": true,
        "word": "inconsistent"
      },
      {
        "perceived_negatively": true,
        "word": "erratic"
      },
      {
        "perceived_negatively": true,
        "word": "forgetful"
      },
      {
        "perceived_negatively": true,
        "word": "impulsive"
      },
      {
        "perceived_negatively": true,
        "word": "frivolous"
      }
    ],
    "big5_conscientiousness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "thorough"
      },
      {
        "perceived_negatively": false,
        "word": "steady"
      },
      {
        "perceived_negatively": false,
        "word": "consistent"
      },
      {
        "perceived_negatively": false,
        "word": "self-disciplined"
      },
      {
        "perceived_negatively": false,
        "word": "logical"
      },
      {
        "perceived_negatively": false,
        "word": "decisive"
      },
      {
        "perceived_negatively": false,
        "word": "controlled"
      },
      {
        "perceived_negatively": false,
        "word": "concise"
      }
    ],
    "big5_openness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "easily rattled"
      },
      {
        "perceived_negatively": false,
        "word": "easily irked"
      },
      {
        "perceived_negatively": false,
        "word": "apprehensive"
      }
    ],
    "big5_agreeableness_plus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "dependent"
      },
      {
        "perceived_negatively": true,
        "word": "simple"
      }
    ],
    "big5_conscientiousness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "cautious"
      },
      {
        "perceived_negatively": false,
        "word": "confident"
      },
      {
        "perceived_negatively": false,
        "word": "punctual"
      },
      {
        "perceived_negatively": false,
        "word": "formal"
      },
      {
        "perceived_negatively": false,
        "word": "thrifty"
      },
      {
        "perceived_negatively": false,
        "word": "principled"
      }
    ],
    "big5_agreeableness_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "helpful"
      },
      {
        "perceived_negatively": false,
        "word": "cooperative"
      },
      {
        "perceived_negatively": false,
        "word": "considerate"
      },
      {
        "perceived_negatively": false,
        "word": "respectful"
      },
      {
        "perceived_negatively": false,
        "word": "polite"
      },
      {
        "perceived_negatively": false,
        "word": "reasonable"
      },
      {
        "perceived_negatively": false,
        "word": "courteous"
      },
      {
        "perceived_negatively": false,
        "word": "thoughtful"
      },
      {
        "perceived_negatively": false,
        "word": "loyal"
      },
      {
        "perceived_negatively": false,
        "word": "moral"
      }
    ],
    "big5_neuroticism_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "rational"
      },
      {
        "perceived_negatively": false,
        "word": "objective"
      },
      {
        "perceived_negatively": false,
        "word": "steady"
      },
      {
        "perceived_negatively": false,
        "word": "logical"
      },
      {
        "perceived_negatively": false,
        "word": "decisive"
      },
      {
        "perceived_negatively": false,
        "word": "poised"
      },
      {
        "perceived_negatively": false,
        "word": "concise"
      },
      {
        "perceived_negatively": false,
        "word": "thorough"
      },
      {
        "perceived_negatively": false,
        "word": "economical"
      },
      {
        "perceived_negatively": false,
        "word": "self-disciplined"
      }
    ],
    "big5_extraversion_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "confident"
      },
      {
        "perceived_negatively": false,
        "word": "bold"
      },
      {
        "perceived_negatively": false,
        "word": "assured"
      },
      {
        "perceived_negatively": false,
        "word": "uninhibited"
      },
      {
        "perceived_negatively": false,
        "word": "courageous"
      },
      {
        "perceived_negatively": false,
        "word": "brave"
      },
      {
        "perceived_negatively": false,
        "word": "self-satisfied"
      },
      {
        "perceived_negatively": false,
        "word": "vigorous"
      },
      {
        "perceived_negatively": false,
        "word": "strong"
      }
    ],
    "big5_agreeableness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "cynical"
      },
      {
        "perceived_negatively": true,
        "word": "wary of others"
      },
      {
        "perceived_negatively": true,
        "word": "seclusive"
      },
      {
        "perceived_negatively": true,
        "word": "detached"
      },
      {
        "perceived_negatively": true,
        "word": "impersonal"
      },
      {
        "perceived_negatively": true,
        "word": "glum"
      }
    ],
    "big5_neuroticism_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "informal"
      },
      {
        "perceived_negatively": false,
        "word": "low-key"
      }
    ],
    "big5_neuroticism_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "unemotional"
      },
      {
        "perceived_negatively": true,
        "word": "insensitive"
      },
      {
        "perceived_negatively": true,
        "word": "unaffectionate"
      },
      {
        "perceived_negatively": true,
        "word": "passionless"
      }
    ],
    "big5_extraversion_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "guarded"
      },
      {
        "perceived_negatively": false,
        "word": "pessimistic"
      },
      {
        "perceived_negatively": false,
        "word": "secretive"
      },
      {
        "perceived_negatively": true,
        "word": "cowardly"
      },
      {
        "perceived_negatively": false,
        "word": "secretive"
      }
    ],
    "big5_openness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "introspective"
      },
      {
        "perceived_negatively": false,
        "word": "meditative"
      },
      {
        "perceived_negatively": false,
        "word": "contemplating"
      },
      {
        "perceived_negatively": false,
        "word": "self-examining"
      },
      {
        "perceived_negatively": false,
        "word": "inner-directed"
      }
    ],
    "big5_extraversion_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "boisterous"
      },
      {
        "perceived_negatively": false,
        "word": "mischievous"
      },
      {
        "perceived_negatively": false,
        "word": "exhibitionistic"
      },
      {
        "perceived_negatively": false,
        "word": "gregarious"
      },
      {
        "perceived_negatively": false,
        "word": "demonstrative"
      }
    ],
    "big5_conscientiousness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "unruly"
      },
      {
        "perceived_negatively": false,
        "word": "boisterous"
      },
      {
        "perceived_negatively": true,
        "word": "reckless"
      },
      {
        "perceived_negatively": true,
        "word": "devil-may-care"
      },
      {
        "perceived_negatively": false,
        "word": "demonstrative"
      }
    ],
    "big5_openness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "passionate"
      },
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": false,
        "word": "sensual"
      }
    ],
    "big5_extraversion_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "social"
      },
      {
        "perceived_negatively": false,
        "word": "energetic"
      },
      {
        "perceived_negatively": false,
        "word": "enthusiastic"
      },
      {
        "perceived_negatively": false,
        "word": "communicative"
      },
      {
        "perceived_negatively": false,
        "word": "vibrant"
      },
      {
        "perceived_negatively": false,
        "word": "spirited"
      },
      {
        "perceived_negatively": false,
        "word": "magnetic"
      },
      {
        "perceived_negatively": false,
        "word": "zestful"
      }
    ],
    "big5_neuroticism_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "compulsive"
      },
      {
        "perceived_negatively": true,
        "word": "nosey"
      },
      {
        "perceived_negatively": true,
        "word": "self-indulgent"
      },
      {
        "perceived_negatively": true,
        "word": "forgetful"
      },
      {
        "perceived_negatively": true,
        "word": "impulsive"
      }
    ],
    "big5_openness_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "unconventional"
      },
      {
        "perceived_negatively": false,
        "word": "quirky"
      }
    ],
    "big5_conscientiousness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "indecisive"
      },
      {
        "perceived_negatively": true,
        "word": "aimless"
      },
      {
        "perceived_negatively": false,
        "word": "wishy-washy"
      },
      {
        "perceived_negatively": false,
        "word": "noncommittal"
      },
      {
        "perceived_negatively": true,
        "word": "unambitious"
      }
    ],
    "big5_neuroticism_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "particular"
      },
      {
        "perceived_negatively": true,
        "word": "high-strung"
      }
    ]
  },
  "values": {
    "value_self_transcendence": [
      {
        "Term": "Helping others",
        "LowDescription": "You think people can handle their own business without interference",
        "HighDescription": "You think it is important to take care of the people around you"
      },
      {
        "Term": "Fairness",
        "LowDescription": "You believe that people create their own opportunities",
        "HighDescription": "You believe in social justice and equality for all"
      },
      {
        "Term": "Social justice",
        "LowDescription": "You believe that people create their own opportunities",
        "HighDescription": "You believe in social justice and equality for all"
      },
      {
        "Term": "Equality",
        "LowDescription": "You believe that people create their own opportunities",
        "HighDescription": "You believe in social justice and equality for all"
      },
      {
        "Term": "Community service",
        "LowDescription": "You think people can handle their own business without interference",
        "HighDescription": "You think it is important to take care of the people around you"
      }
    ],
    "value_hedonism": [
      {
        "Term": "Taking pleasure in life",
        "LowDescription": "You prefer activities with a purpose greater than just personal enjoyment",
        "HighDescription": "You are highly motivated to enjoy life to its fullest"
      }
    ],
    "value_conservation": [
      {
        "Term": "Tradition",
        "LowDescription": "You care more about making your own path than following what others have done",
        "HighDescription": "You highly respect the groups you belong to and follow their guidance"
      },
      {
        "Term": "Harmony",
        "LowDescription": "You decide what is right based on your beliefs, not what other people think",
        "HighDescription": "You know rules are there for a reason, and you try never to break them"
      },
      {
        "Term": "Humility",
        "LowDescription": "You decide what is right based on your beliefs, not what other people think",
        "HighDescription": "You see worth in deferring to others"
      },
      {
        "Term": "Social norms",
        "LowDescription": "You decide what is right based on your beliefs, not what other people think",
        "HighDescription": "You know rules are there for a reason, and you try never to break them"
      },
      {
        "Term": "Security",
        "LowDescription": "You believe that security is worth sacrificing to achieve other goals",
        "HighDescription": "You believe that safety and security are important things to safeguard"
      },
      {
        "Term": "Safety",
        "LowDescription": "You believe that safety is worth sacrificing to achieve other goals",
        "HighDescription": "You believe that safety and security are important things to safeguard"
      }
    ],
    "value_self_enhancement": [
      {
        "Term": "Achieving success",
        "LowDescription": "You make decisions with little regard for how they show off your talents",
        "HighDescription": "You seek out opportunities to improve yourself and demonstrate that you are a capable person"
      },
      {
        "Term": "Gaining social status",
        "LowDescription": "You are comfortable with your social status and don't feel a strong need to improve it",
        "HighDescription": "You put substantial effort into improving your status and public image"
      },
      {
        "Term": "Ambition",
        "LowDescription": "You are comfortable with your social status and don't feel a strong need to improve it",
        "HighDescription": "You feel it is important to push forward towards goals"
      },
      {
        "Term": "High achievement",
        "LowDescription": "You make decisions with little regard for how they show off your talents",
        "HighDescription": "You seek out opportunities to improve yourself and demonstrate that you are a capable person"
      }
    ],
    "value_openness_to_change": [
      {
        "Term": "Independence",
        "LowDescription": "You welcome when others direct your activities for you",
        "HighDescription": "You like to set your own goals to decide how to best achieve them"
      },
      {
        "Term": "Excitement",
        "LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
        "HighDescription": "You are eager to search out new and exciting experiences"
      },
      {
        "Term": "Creativity",
        "LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
        "HighDescription": "You are eager to search out new and exciting experiences"
      },
      {
        "Term": "Curiosity",
        "LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
        "HighDescription": "You are eager to search out new and exciting experiences"
      },
      {
        "Term": "Self-direction",
        "LowDescription": "You welcome when others direct your activities for you",
        "HighDescription": "You like to set your own goals to decide how to best achieve them"
      },
      {
        "Term": "Freedom",
        "LowDescription": "You welcome when others direct your activities for you",
        "HighDescription": "You like to set your own goals to decide how to best achieve them"
      }
    ]
  }
}

},{}],5:[function(require,module,exports){
module.exports={
  "facets": {
    "facet_intellect": {
      "LowTerm": "Concreto",
      "HighDescription": "Está abierto a nuevas ideas, le intrigan y ama explorarlas",
      "HighTerm": "Filosófico",
      "LowDescription": "Prefiere lidiar con el mundo tal cual es, raramente considerando ideas abstractas",
      "Big5": "big5_openness"
    },
    "facet_gregariousness": {
      "LowTerm": "Independiente",
      "HighDescription": "Disfruta estando en compañía de otros",
      "HighTerm": "Sociable",
      "LowDescription": "Tiene un fuerte deseo de tener tiempo para usted mismo",
      "Big5": "big5_extraversion"
    },
    "facet_achievement_striving": {
      "LowTerm": "Una persona satisfecha",
      "HighDescription": "Se propone grandes metas y trabaja duro para alcanzarlas",
      "HighTerm": "Una persona motivada",
      "LowDescription": "Está conforme con sus logros y no siente la necesidad de ponerse metas más ambiciosas",
      "Big5": "big5_conscientiousness"
    },
    "facet_depression": {
      "LowTerm": "Una persona satisfecha",
      "HighDescription": "Piensa bastante seguido en las cosas con las que está disconforme",
      "HighTerm": "Melancólico",
      "LowDescription": "Generalmente se acepta a usted mismo tal cual es",
      "Big5": "big5_neuroticism"
    },
    "facet_liberalism": {
      "LowTerm": "Respetuoso de la autoridad",
      "HighDescription": "Prefiere desafiar a la autoridad y  a los valores tradicionales para lograr cambios positivos",
      "HighTerm": "Desafiante ante la autoridad",
      "LowDescription": "Prefiere seguir tradiciones para mantener una sensación de estabilidad",
      "Big5": "big5_openness"
    },
    "facet_sympathy": {
      "LowTerm": "Una persona de gran fortaleza",
      "HighDescription": "Siente lo que otros sienten y es compasivo con ellos",
      "HighTerm": "Empático",
      "LowDescription": "Cree que las personas deberían confiar más en sí mismos que en otras personas",
      "Big5": "big5_agreeableness"
    },
    "facet_imagination": {
      "LowTerm": "Una persona con los pies en la tierra",
      "HighDescription": "Su imaginación vuela libre",
      "HighTerm": "Imaginativo",
      "LowDescription": "Prefiere hechos antes que la fantasía",
      "Big5": "big5_openness"
    },
    "facet_self_discipline": {
      "LowTerm": "Intermitente",
      "HighDescription": "Puede hacer frente y llevar a cabo tareas difíciles",
      "HighTerm": "Persistente",
      "LowDescription": "Le da trabajo llevar adelante tareas difíciles por un largo periodo de tiempo",
      "Big5": "big5_conscientiousness"
    },
    "facet_assertiveness": {
      "LowTerm": "Callado",
      "HighDescription": "Tiende a expresarse y a hacerse cargo de las situaciones, y se encuentra cómodo liderando grupos",
      "HighTerm": "Asertivo",
      "LowDescription": "Prefiere escuchar antes que hablar, especialmente en situaciones de grupo",
      "Big5": "big5_extraversion"
    },
    "facet_cheerfulness": {
      "LowTerm": "Solemne",
      "HighDescription": "Es una persona alegre y comparte esa alegría con el mundo",
      "HighTerm": "Alegre",
      "LowDescription": "Generalmente es serio y no hace muchas bromas",
      "Big5": "big5_extraversion"
    },
    "facet_self_efficacy": {
      "LowTerm": "Inseguro de sí misma",
      "HighDescription": "Siente que tiene la habilidad de triunfar en las tareas que se propone realizar",
      "HighTerm": "Seguro de sí mismo",
      "LowDescription": "Frecuentemente duda acerca de su habilidad para alcanzar sus metas",
      "Big5": "big5_conscientiousness"
    },
    "facet_morality": {
      "LowTerm": "Una persona comprometida",
      "HighDescription": "Piensa que está mal tomar ventaja de los demás para avanzar",
      "HighTerm": "Intransigente",
      "LowDescription": "Utiliza cualquier medio posible para conseguir lo que quiere y está cómodo con ello",
      "Big5": "big5_agreeableness"
    },
    "facet_anxiety": {
      "LowTerm": "Seguro de sí mismo",
      "HighDescription": "Tiende a preocuparse acerca de las cosas que podrían pasar",
      "HighTerm": "Propenso a preocuparse",
      "LowDescription": "Tiende a sentirse tranquilo y a confiar en sí mismo",
      "Big5": "big5_neuroticism"
    },
    "facet_altruism": {
      "LowTerm": "Individualista",
      "HighDescription": "Se siente realizado ayudando a otros y dejará sus cosas de lado para hacerlo",
      "HighTerm": "Altruista",
      "LowDescription": "Está más enfocado en cuidar de usted mismo que en dedicar tiempo a otras personas",
      "Big5": "big5_agreeableness"
    },
    "facet_self_consciousness": {
      "LowTerm": "Confiado",
      "HighDescription": "Es sensible a lo que las demás personas podrían estar pensando acerca de usted",
      "HighTerm": "Consciente de sí mismo",
      "LowDescription": "Es difícil de avergonzar y confía en sí mismo la mayor parte del tiempo",
      "Big5": "big5_neuroticism"
    },
    "facet_vulnerability": {
      "LowTerm": "Una persona que mantiene la calma bajo presión",
      "HighDescription": "Se abruma fácilmente en situaciones de estrés",
      "HighTerm": "Susceptible al estrés",
      "LowDescription": "Maneja eventos inesperados con calma y efectivamente",
      "Big5": "big5_neuroticism"
    },
    "facet_trust": {
      "LowTerm": "Cuidadoso con los demás",
      "HighDescription": "Cree lo mejor de los demás y confía fácilmente en las personas",
      "HighTerm": "Una persona que confía en los demás",
      "LowDescription": "Se cuida de las intenciones de los demás y no confía fácilmente",
      "Big5": "big5_agreeableness"
    },
    "facet_orderliness": {
      "LowTerm": "Desestructurado",
      "HighDescription": "Siente una fuerte necesidad de mantener una vida estructurada",
      "HighTerm": "Organizado",
      "LowDescription": "No le dedica mucho tiempo a organizarse en su vida diaria",
      "Big5": "big5_conscientiousness"
    },
    "facet_friendliness": {
      "LowTerm": "Reservado",
      "HighDescription": "Hace amigos fácilmente y se siente cómodo estando con otras personas",
      "HighTerm": "Extrovertido",
      "LowDescription": "Es una persona reservada y no deja a muchas personas entrar",
      "Big5": "big5_extraversion"
    },
    "facet_modesty": {
      "LowTerm": "Orgulloso",
      "HighDescription": "Se siente cómodo siendo el centro de atención",
      "HighTerm": "Modesto",
      "LowDescription": "Se tiene una estima alta, se encuentra satisfecho con quién es",
      "Big5": "big5_agreeableness"
    },
    "facet_activity_level": {
      "LowTerm": "Relajado",
      "HighDescription": "Disfruta llevar un ritmo de vida acelerado, una agenda ocupada con muchas actividades",
      "HighTerm": "Energético",
      "LowDescription": "Aprecia llevar un ritmo de vida relajado",
      "Big5": "big5_extraversion"
    },
    "facet_cautiousness": {
      "LowTerm": "Audaz",
      "HighDescription": "Piensa cuidadosamente acerca de sus decisiones antes de tomarlas",
      "HighTerm": "Prudente",
      "LowDescription": "Prefiere tomar acción inmediatamente antes que invertir tiempo deliberando qué decisión tomar",
      "Big5": "big5_conscientiousness"
    },
    "facet_dutifulness": {
      "LowTerm": "Despreocupado",
      "HighDescription": "Toma las reglas y las obligaciones seriamente, aún cuando son inconvenientes",
      "HighTerm": "Una persona que cumple con su deber",
      "LowDescription": "Hace lo que quiere sin importar las reglas y las obligaciones",
      "Big5": "big5_conscientiousness"
    },
    "facet_artistic_interests": {
      "LowTerm": "Una persona desinteresada por el arte",
      "HighDescription": "Disfruta de la belleza y busca experiencias creativas",
      "HighTerm": "Una persona que aprecia el arte",
      "LowDescription": "Le interesan menos las actividades artísticas o creativas que la mayoría de las personas que participaron de nuestras encuestas",
      "Big5": "big5_openness"
    },
    "facet_immoderation": {
      "LowTerm": "Sereno",
      "HighDescription": "Siente fuertemente sus deseos y es fácilmente tentado por ellos",
      "HighTerm": "Hedonista",
      "LowDescription": "Controla sus deseos, los cuales no son particularmente intensos",
      "Big5": "big5_neuroticism"
    },
    "facet_emotionality": {
      "LowTerm": "Desapasionado",
      "HighDescription": "Es consciente de sus sentimientos y de cómo expresarlos",
      "HighTerm": "Emocionalmente consciente",
      "LowDescription": "No piensa frecuentemente acerca de sus emociones ni las expresa abiertamente",
      "Big5": "big5_openness"
    },
    "facet_adventurousness": {
      "LowTerm": "Consistente",
      "HighDescription": "Está deseoso de tener nuevas experiencias",
      "HighTerm": "Audaz",
      "LowDescription": "Disfruta de las rutinas familiares y prefiere no desviarse de ellas",
      "Big5": "big5_openness"
    },
    "facet_anger": {
      "LowTerm": "Apacible",
      "HighDescription": "Tiene un temperamento fuerte, especialmente cuando las cosas no funcionan como espera",
      "HighTerm": "Intenso",
      "LowDescription": "Es difícil hacerle enojar",
      "Big5": "big5_neuroticism"
    },
    "facet_excitement_seeking": {
      "LowTerm": "Una persona que busca la calma",
      "HighDescription": "Le emociona tomar riesgos y se aburre si no se ve envuelto en mucha acción",
      "HighTerm": "Una persona que busca la emoción",
      "LowDescription": "Prefiere las actividades tranquilas, pacíficas y seguras",
      "Big5": "big5_extraversion"
    },
    "facet_cooperation": {
      "LowTerm": "Contrario",
      "HighDescription": "Es fácil de complacer e intenta evitar posibles confrontaciones",
      "HighTerm": "Acomodaticio",
      "LowDescription": "No te importa contradecir a los demás",
      "Big5": "big5_agreeableness"
    }
  },
  "needs": {
    "need_practicality": [
      "eficiencia",
      "practicidad",
      "valor agregado",
      "conveniencia"
    ],
    "need_curiosity": [
      "descubrimiento",
      "maestría",
      "adquisición de conocimiento"
    ],
    "need_stability": [
      "estabilidad",
      "autenticidad",
      "integridad"
    ],
    "need_self_expression": [
      "auto-expresión",
      "empoderamiento personal",
      "fortaleza personal"
    ],
    "need_structure": [
      "organización",
      "franqueza",
      "claridad",
      "confiabilidad"
    ],
    "need_challenge": [
      "prestigio",
      "competencia",
      "gloria"
    ],
    "need_liberty": [
      "modernidad",
      "expansión de posibilidades",
      "poder escapar",
      "espontaneidad",
      "novedad"
    ],
    "need_harmony": [
      "bienestar",
      "cortesía",
      "civilidad"
    ],
    "need_love": [
      "afinidad",
      "conexión"
    ],
    "need_excitement": [
      "regocijo",
      "anticipación",
      "cebración"
    ],
    "need_ideal": [
      "sofisticación",
      "espiritualidad",
      "superioridad",
      "realización"
    ],
    "need_closeness": [
      "pertenencia",
      "nostalgia",
      "intimidad"
    ]
  },
  "phrases": {
    "Experiences that give a sense of %s hold some appeal to you": "Le agradan las experiencias que le dan una sensación de %s",
    "You consider %s to guide a large part of what you do": "Usted considera que %s lo guia en gran parte de lo que hace",
    "You value both %s a bit": "Usted valora a %s un poco",
    "And %s": "Y %s",
    "And you are %s": "Y usted es %s",
    "a bit %s": "un poco %s",
    "can be perceived as %s": "puede ser percibido como %s",
    "You are relatively unconcerned with both %s and %s": "Usted es relativamente indiferente con %s y %s",
    "You are %s and %s": "Usted es %s y %s",
    "You value both %s and %s a bit": "Usted valora a %s y %s un poco",
    "You don't find %s to be particularly motivating for you": "Usted no encuentra a %s particularmente motivante para usted",
    "You are %s": "Usted es %s",
    "You are %s, %s and %s": "Usted es %s, %s y %s",
    "You are motivated to seek out experiences that provide a strong feeling of %s": "Está motivado a buscar experiencias que lo provean de una fuerte sensación de %s",
    "Experiences that make you feel high %s are generally unappealing to you": "No le agradan las experiencias que le dan una gran sensación de %s",
    "You don't find either %s or %s to be particularly motivating for you": "Usted no encuentra a %s o %s particularmente motivantes para usted",
    "You are relatively unconcerned with %s": "Usted es relativamente indiferente con %s",
    "somewhat %s": "algo %s",
    "Your choices are driven by a desire for %s": "Sus elecciones están determinadas por un deseo de %s",
    "You consider both %s and %s to guide a large part of what you do": "Usted considera que %s y %s lo guian en gran parte de lo que hace"
  },
  "traits": {
    "big5_conscientiousness_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "inflexible"
      },
      {
        "perceived_negatively": false,
        "word": "estricto"
      },
      {
        "perceived_negatively": false,
        "word": "rígido"
      }
    ],
    "big5_neuroticism_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "guardado"
      },
      {
        "perceived_negatively": true,
        "word": "irritable"
      },
      {
        "perceived_negatively": true,
        "word": "inseguro"
      },
      {
        "perceived_negatively": true,
        "word": "pesimista"
      },
      {
        "perceived_negatively": false,
        "word": "reservado"
      },
      {
        "perceived_negatively": true,
        "word": "temeroso"
      },
      {
        "perceived_negatively": true,
        "word": "negativo"
      },
      {
        "perceived_negatively": false,
        "word": "auto-crítico"
      }
    ],
    "big5_agreeableness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": true,
        "word": "insensible"
      },
      {
        "perceived_negatively": true,
        "word": "poco afectuoso"
      },
      {
        "perceived_negatively": true,
        "word": "desapasionado"
      },
      {
        "perceived_negatively": true,
        "word": "una persona sin emociones"
      }
    ],
    "big5_agreeableness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "sentimental"
      },
      {
        "perceived_negatively": false,
        "word": "cariñoso"
      },
      {
        "perceived_negatively": false,
        "word": "sensible"
      },
      {
        "perceived_negatively": false,
        "word": "tierno"
      },
      {
        "perceived_negatively": false,
        "word": "apasionado"
      },
      {
        "perceived_negatively": false,
        "word": "romántico"
      }
    ],
    "big5_conscientiousness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "informal"
      },
      {
        "perceived_negatively": false,
        "word": "de bajo perfil"
      }
    ],
    "big5_agreeableness_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "sobrio"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      }
    ],
    "big5_conscientiousness_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "confiable"
      },
      {
        "perceived_negatively": false,
        "word": "responsable"
      },
      {
        "perceived_negatively": false,
        "word": "seguro"
      },
      {
        "perceived_negatively": false,
        "word": "educado"
      },
      {
        "perceived_negatively": false,
        "word": "considerado"
      }
    ],
    "big5_agreeableness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "obstinado"
      },
      {
        "perceived_negatively": true,
        "word": "abrupto"
      },
      {
        "perceived_negatively": true,
        "word": "crudo"
      },
      {
        "perceived_negatively": true,
        "word": "combativo"
      },
      {
        "perceived_negatively": true,
        "word": "duro"
      },
      {
        "perceived_negatively": false,
        "word": "astuto"
      },
      {
        "perceived_negatively": true,
        "word": "manipulador"
      },
      {
        "perceived_negatively": true,
        "word": "hosco"
      },
      {
        "perceived_negatively": true,
        "word": "taimado"
      }
    ],
    "big5_neuroticism_plus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "irritable"
      },
      {
        "perceived_negatively": false,
        "word": "fastidioso"
      },
      {
        "perceived_negatively": false,
        "word": "aprensivo"
      }
    ],
    "big5_openness_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": true,
        "word": "simple"
      },
      {
        "perceived_negatively": true,
        "word": "dependiente"
      }
    ],
    "big5_neuroticism_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "imperturbable"
      },
      {
        "perceived_negatively": true,
        "word": "insensible"
      }
    ],
    "big5_agreeableness_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "desconsiderado"
      },
      {
        "perceived_negatively": true,
        "word": "descortés"
      },
      {
        "perceived_negatively": true,
        "word": "desconfiado"
      },
      {
        "perceived_negatively": true,
        "word": "poco cooperativo"
      },
      {
        "perceived_negatively": true,
        "word": "irreflexivo"
      }
    ],
    "big5_extraversion_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "activo"
      },
      {
        "perceived_negatively": false,
        "word": "competitivo"
      },
      {
        "perceived_negatively": false,
        "word": "persistente"
      },
      {
        "perceived_negatively": false,
        "word": "ambicioso"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      }
    ],
    "big5_agreeableness_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "estricto"
      },
      {
        "perceived_negatively": false,
        "word": "rígido"
      },
      {
        "perceived_negatively": true,
        "word": "duro"
      }
    ],
    "big5_neuroticism_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "paciente"
      },
      {
        "perceived_negatively": false,
        "word": "relajado"
      },
      {
        "perceived_negatively": false,
        "word": "poco exigente"
      },
      {
        "perceived_negatively": false,
        "word": "realista"
      },
      {
        "perceived_negatively": false,
        "word": "optimista"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      },
      {
        "perceived_negatively": false,
        "word": "poco crítico"
      },
      {
        "perceived_negatively": false,
        "word": "poco pretencioso"
      }
    ],
    "big5_openness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "predecible"
      },
      {
        "perceived_negatively": true,
        "word": "poco imaginativo"
      },
      {
        "perceived_negatively": false,
        "word": "sombrío"
      },
      {
        "perceived_negatively": true,
        "word": "apático"
      },
      {
        "perceived_negatively": true,
        "word": "poco aventurero"
      }
    ],
    "big5_extraversion_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "terco"
      },
      {
        "perceived_negatively": true,
        "word": "vigoroso"
      },
      {
        "perceived_negatively": true,
        "word": "dominador"
      },
      {
        "perceived_negatively": true,
        "word": "presumido"
      },
      {
        "perceived_negatively": true,
        "word": "mandón"
      },
      {
        "perceived_negatively": false,
        "word": "dominante"
      },
      {
        "perceived_negatively": false,
        "word": "astuto"
      }
    ],
    "big5_neuroticism_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "temperamental"
      },
      {
        "perceived_negatively": true,
        "word": "irritable"
      },
      {
        "perceived_negatively": true,
        "word": "peleador"
      },
      {
        "perceived_negatively": true,
        "word": "impaciente"
      },
      {
        "perceived_negatively": true,
        "word": "gruñón"
      },
      {
        "perceived_negatively": true,
        "word": "malhumorado"
      },
      {
        "perceived_negatively": true,
        "word": "irritable"
      }
    ],
    "big5_neuroticism_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": false,
        "word": "coqueto"
      },
      {
        "perceived_negatively": true,
        "word": "explosivo"
      },
      {
        "perceived_negatively": false,
        "word": "extravagante"
      },
      {
        "perceived_negatively": true,
        "word": "volátil"
      }
    ],
    "big5_agreeableness_minus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "tosco"
      },
      {
        "perceived_negatively": true,
        "word": "una persona sin tacto"
      },
      {
        "perceived_negatively": true,
        "word": "brusco"
      },
      {
        "perceived_negatively": true,
        "word": "cerrado"
      },
      {
        "perceived_negatively": true,
        "word": "áspero"
      },
      {
        "perceived_negatively": true,
        "word": "implacable"
      },
      {
        "perceived_negatively": true,
        "word": "poco caritativo"
      },
      {
        "perceived_negatively": true,
        "word": "vengativo"
      }
    ],
    "big5_conscientiousness_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "poco pretencioso"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      }
    ],
    "big5_agreeableness_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "amistoso"
      },
      {
        "perceived_negatively": false,
        "word": "una persona con tacto"
      },
      {
        "perceived_negatively": false,
        "word": "diplomático"
      },
      {
        "perceived_negatively": false,
        "word": "profundo"
      },
      {
        "perceived_negatively": false,
        "word": "idealista"
      }
    ],
    "big5_agreeableness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "crítico"
      },
      {
        "perceived_negatively": true,
        "word": "egoísta"
      },
      {
        "perceived_negatively": true,
        "word": "de mal genio"
      },
      {
        "perceived_negatively": true,
        "word": "antagonista"
      },
      {
        "perceived_negatively": true,
        "word": "gruñón"
      },
      {
        "perceived_negatively": true,
        "word": "amargado"
      },
      {
        "perceived_negatively": true,
        "word": "desagradable"
      },
      {
        "perceived_negatively": true,
        "word": "exigente"
      }
    ],
    "big5_openness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "imperturbable"
      },
      {
        "perceived_negatively": true,
        "word": "insensible"
      }
    ],
    "big5_conscientiousness_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "sofisticado"
      },
      {
        "perceived_negatively": false,
        "word": "perfeccionista"
      },
      {
        "perceived_negatively": false,
        "word": "industrioso"
      },
      {
        "perceived_negatively": false,
        "word": "digno"
      },
      {
        "perceived_negatively": false,
        "word": "refinado"
      },
      {
        "perceived_negatively": false,
        "word": "culto"
      },
      {
        "perceived_negatively": false,
        "word": "previsor"
      }
    ],
    "big5_agreeableness_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      },
      {
        "perceived_negatively": false,
        "word": "excéntrico"
      },
      {
        "perceived_negatively": false,
        "word": "individualista"
      }
    ],
    "big5_neuroticism_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": false,
        "word": "apasionado"
      },
      {
        "perceived_negatively": false,
        "word": "sensual"
      }
    ],
    "big5_neuroticism_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "sentido"
      },
      {
        "perceived_negatively": false,
        "word": "versátil"
      },
      {
        "perceived_negatively": false,
        "word": "creativo"
      },
      {
        "perceived_negatively": false,
        "word": "intelectual"
      },
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      }
    ],
    "big5_openness_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "convencional"
      },
      {
        "perceived_negatively": false,
        "word": "tradicional"
      }
    ],
    "big5_extraversion_plus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": true,
        "word": "inescrupuloso"
      },
      {
        "perceived_negatively": true,
        "word": "pomposo"
      }
    ],
    "big5_extraversion_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "una persona guiada por su propia consciencia y valores"
      },
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      },
      {
        "perceived_negatively": false,
        "word": "pensativo"
      },
      {
        "perceived_negatively": false,
        "word": "contemplativo"
      },
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      }
    ],
    "big5_openness_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "cortoplacista"
      },
      {
        "perceived_negatively": false,
        "word": "temerario"
      },
      {
        "perceived_negatively": true,
        "word": "ilógico"
      },
      {
        "perceived_negatively": true,
        "word": "inmaduro"
      },
      {
        "perceived_negatively": true,
        "word": "azaroso"
      },
      {
        "perceived_negatively": false,
        "word": "laxo"
      },
      {
        "perceived_negatively": true,
        "word": "irrespetuoso"
      }
    ],
    "big5_extraversion_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "tranquilo"
      },
      {
        "perceived_negatively": false,
        "word": "sosegado"
      },
      {
        "perceived_negatively": false,
        "word": "plácido"
      },
      {
        "perceived_negatively": false,
        "word": "imparcial"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      },
      {
        "perceived_negatively": false,
        "word": "condescendiente"
      }
    ],
    "big5_conscientiousness_plus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "tradicional"
      },
      {
        "perceived_negatively": false,
        "word": "convencional"
      }
    ],
    "big5_openness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "creativo"
      },
      {
        "perceived_negatively": false,
        "word": "intelectual"
      },
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      },
      {
        "perceived_negatively": false,
        "word": "versátil"
      },
      {
        "perceived_negatively": false,
        "word": "inventivo"
      }
    ],
    "big5_agreeableness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "conmovible"
      },
      {
        "perceived_negatively": false,
        "word": "agradable"
      },
      {
        "perceived_negatively": false,
        "word": "servicial"
      },
      {
        "perceived_negatively": false,
        "word": "humilde"
      },
      {
        "perceived_negatively": true,
        "word": "indulgente"
      }
    ],
    "big5_extraversion_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "indirecto"
      },
      {
        "perceived_negatively": true,
        "word": "débil"
      },
      {
        "perceived_negatively": true,
        "word": "perezoso"
      },
      {
        "perceived_negatively": true,
        "word": "poco persistente"
      },
      {
        "perceived_negatively": true,
        "word": "vago"
      }
    ],
    "big5_openness_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "analítico"
      },
      {
        "perceived_negatively": false,
        "word": "perceptivo"
      },
      {
        "perceived_negatively": false,
        "word": "informativo"
      },
      {
        "perceived_negatively": false,
        "word": "grandilocuente"
      },
      {
        "perceived_negatively": false,
        "word": "digno"
      },
      {
        "perceived_negatively": false,
        "word": "culto"
      }
    ],
    "big5_openness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": true,
        "word": "inescrupuloso"
      },
      {
        "perceived_negatively": true,
        "word": "pomposo"
      }
    ],
    "big5_conscientiousness_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "arrebatado"
      },
      {
        "perceived_negatively": true,
        "word": "poco cooperativo"
      },
      {
        "perceived_negatively": true,
        "word": "poco fiable"
      },
      {
        "perceived_negatively": true,
        "word": "desconfiado"
      },
      {
        "perceived_negatively": true,
        "word": "irreflexivo"
      }
    ],
    "big5_agreeableness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "generoso"
      },
      {
        "perceived_negatively": false,
        "word": "agradable"
      },
      {
        "perceived_negatively": false,
        "word": "tolerante"
      },
      {
        "perceived_negatively": false,
        "word": "pacífico"
      },
      {
        "perceived_negatively": false,
        "word": "flexible"
      },
      {
        "perceived_negatively": false,
        "word": "fácil de tratar"
      },
      {
        "perceived_negatively": false,
        "word": "justo"
      },
      {
        "perceived_negatively": false,
        "word": "caritativo"
      },
      {
        "perceived_negatively": false,
        "word": "confiable"
      }
    ],
    "big5_openness_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      },
      {
        "perceived_negatively": false,
        "word": "excéntrico"
      },
      {
        "perceived_negatively": false,
        "word": "individualista"
      }
    ],
    "big5_conscientiousness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "ambicioso"
      },
      {
        "perceived_negatively": false,
        "word": "alerta"
      },
      {
        "perceived_negatively": false,
        "word": "firme"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      },
      {
        "perceived_negatively": false,
        "word": "competitivo"
      }
    ],
    "big5_openness_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "idealista"
      },
      {
        "perceived_negatively": false,
        "word": "diplomático"
      },
      {
        "perceived_negatively": false,
        "word": "profundo"
      },
      {
        "perceived_negatively": false,
        "word": "una persona con tacto"
      },
      {
        "perceived_negatively": false,
        "word": "amistoso"
      }
    ],
    "big5_conscientiousness_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "temerario"
      },
      {
        "perceived_negatively": true,
        "word": "ilógico"
      },
      {
        "perceived_negatively": true,
        "word": "inmaduro"
      },
      {
        "perceived_negatively": true,
        "word": "azaroso"
      },
      {
        "perceived_negatively": false,
        "word": "laxo"
      },
      {
        "perceived_negatively": true,
        "word": "indisciplinado"
      }
    ],
    "big5_conscientiousness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "detallista"
      },
      {
        "perceived_negatively": true,
        "word": "excitable"
      }
    ],
    "big5_neuroticism_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "inconsciente de si mismo"
      },
      {
        "perceived_negatively": false,
        "word": "incansable"
      },
      {
        "perceived_negatively": false,
        "word": "infatigable"
      }
    ],
    "big5_openness_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "ordinario"
      },
      {
        "perceived_negatively": true,
        "word": "sin tacto"
      },
      {
        "perceived_negatively": true,
        "word": "brusco"
      },
      {
        "perceived_negatively": true,
        "word": "cerrado"
      },
      {
        "perceived_negatively": true,
        "word": "duro"
      }
    ],
    "big5_neuroticism_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "emotivo"
      },
      {
        "perceived_negatively": true,
        "word": "crédulo"
      },
      {
        "perceived_negatively": false,
        "word": "cariñoso"
      },
      {
        "perceived_negatively": false,
        "word": "sensible"
      },
      {
        "perceived_negatively": false,
        "word": "blando"
      }
    ],
    "big5_extraversion_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "pacífico"
      },
      {
        "perceived_negatively": false,
        "word": "humilde"
      },
      {
        "perceived_negatively": false,
        "word": "sumiso"
      },
      {
        "perceived_negatively": false,
        "word": "tímido"
      },
      {
        "perceived_negatively": false,
        "word": "obediente"
      },
      {
        "perceived_negatively": false,
        "word": "ingenuo"
      }
    ],
    "big5_agreeableness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "efervescente"
      },
      {
        "perceived_negatively": false,
        "word": "alegre"
      },
      {
        "perceived_negatively": false,
        "word": "amistoso"
      },
      {
        "perceived_negatively": false,
        "word": "alegre"
      },
      {
        "perceived_negatively": false,
        "word": "jovial"
      },
      {
        "perceived_negatively": false,
        "word": "jocoso"
      }
    ],
    "big5_openness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "mundano"
      },
      {
        "perceived_negatively": false,
        "word": "exagerado"
      },
      {
        "perceived_negatively": false,
        "word": "elocuente"
      },
      {
        "perceived_negatively": false,
        "word": "inquisitivo"
      },
      {
        "perceived_negatively": false,
        "word": "intenso"
      }
    ],
    "big5_extraversion_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "sombrío"
      },
      {
        "perceived_negatively": true,
        "word": "manso"
      },
      {
        "perceived_negatively": true,
        "word": "poco aventurero"
      },
      {
        "perceived_negatively": false,
        "word": "pasivo"
      },
      {
        "perceived_negatively": true,
        "word": "apático"
      },
      {
        "perceived_negatively": false,
        "word": "dócil"
      }
    ],
    "big5_extraversion_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "moderado"
      },
      {
        "perceived_negatively": false,
        "word": "serio"
      },
      {
        "perceived_negatively": false,
        "word": "discreto"
      },
      {
        "perceived_negatively": false,
        "word": "cauteloso"
      },
      {
        "perceived_negatively": false,
        "word": "principista"
      }
    ],
    "big5_neuroticism_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "modesto"
      },
      {
        "perceived_negatively": true,
        "word": "poco excitable"
      },
      {
        "perceived_negatively": false,
        "word": "plácido"
      },
      {
        "perceived_negatively": false,
        "word": "tranquilo"
      }
    ],
    "big5_extraversion_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "explosivo"
      },
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": false,
        "word": "extravagante"
      },
      {
        "perceived_negatively": true,
        "word": "volátil"
      },
      {
        "perceived_negatively": false,
        "word": "coqueto"
      }
    ],
    "big5_extraversion_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "expresivo"
      },
      {
        "perceived_negatively": false,
        "word": "cándido"
      },
      {
        "perceived_negatively": false,
        "word": "dramático"
      },
      {
        "perceived_negatively": false,
        "word": "espontáneo"
      },
      {
        "perceived_negatively": false,
        "word": "ingenioso"
      },
      {
        "perceived_negatively": false,
        "word": "oportunista"
      },
      {
        "perceived_negatively": false,
        "word": "independiente"
      }
    ],
    "big5_conscientiousness_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "poco convencional"
      },
      {
        "perceived_negatively": false,
        "word": "peculiar"
      }
    ],
    "big5_extraversion_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "escéptico"
      },
      {
        "perceived_negatively": false,
        "word": "cauto con los demás"
      },
      {
        "perceived_negatively": true,
        "word": "solitario"
      },
      {
        "perceived_negatively": true,
        "word": "poco comunicativo"
      },
      {
        "perceived_negatively": true,
        "word": "antisocial"
      },
      {
        "perceived_negatively": true,
        "word": "sombrío"
      },
      {
        "perceived_negatively": true,
        "word": "desinteresado"
      },
      {
        "perceived_negatively": false,
        "word": "apartado"
      }
    ],
    "big5_conscientiousness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "atolondrado"
      },
      {
        "perceived_negatively": true,
        "word": "inconsistente"
      },
      {
        "perceived_negatively": true,
        "word": "errático"
      },
      {
        "perceived_negatively": true,
        "word": "olvidadizo"
      },
      {
        "perceived_negatively": true,
        "word": "impulsivo"
      },
      {
        "perceived_negatively": true,
        "word": "frívolo"
      }
    ],
    "big5_conscientiousness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "minucioso"
      },
      {
        "perceived_negatively": false,
        "word": "estable"
      },
      {
        "perceived_negatively": false,
        "word": "consistente"
      },
      {
        "perceived_negatively": false,
        "word": "disciplinado"
      },
      {
        "perceived_negatively": false,
        "word": "lógico"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      },
      {
        "perceived_negatively": false,
        "word": "controlado"
      },
      {
        "perceived_negatively": false,
        "word": "conciso"
      }
    ],
    "big5_openness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "irritable"
      },
      {
        "perceived_negatively": false,
        "word": "fastidioso"
      },
      {
        "perceived_negatively": false,
        "word": "aprensivo"
      }
    ],
    "big5_agreeableness_plus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "dependiente"
      },
      {
        "perceived_negatively": true,
        "word": "simple"
      }
    ],
    "big5_conscientiousness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "cauto"
      },
      {
        "perceived_negatively": false,
        "word": "seguro"
      },
      {
        "perceived_negatively": false,
        "word": "exacto"
      },
      {
        "perceived_negatively": false,
        "word": "formal"
      },
      {
        "perceived_negatively": false,
        "word": "ahorrativo"
      },
      {
        "perceived_negatively": false,
        "word": "principista"
      }
    ],
    "big5_agreeableness_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "servicial"
      },
      {
        "perceived_negatively": false,
        "word": "cooperativo"
      },
      {
        "perceived_negatively": false,
        "word": "considerado"
      },
      {
        "perceived_negatively": false,
        "word": "respetuoso"
      },
      {
        "perceived_negatively": false,
        "word": "cortés"
      },
      {
        "perceived_negatively": false,
        "word": "sensato"
      },
      {
        "perceived_negatively": false,
        "word": "atento"
      },
      {
        "perceived_negatively": false,
        "word": "considerado"
      },
      {
        "perceived_negatively": false,
        "word": "leal"
      },
      {
        "perceived_negatively": false,
        "word": "moral"
      }
    ],
    "big5_neuroticism_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "racional"
      },
      {
        "perceived_negatively": false,
        "word": "objetivo"
      },
      {
        "perceived_negatively": false,
        "word": "estable"
      },
      {
        "perceived_negatively": false,
        "word": "lógico"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      },
      {
        "perceived_negatively": false,
        "word": "preparado"
      },
      {
        "perceived_negatively": false,
        "word": "conciso"
      },
      {
        "perceived_negatively": false,
        "word": "exhaustivo"
      },
      {
        "perceived_negatively": false,
        "word": "económico"
      },
      {
        "perceived_negatively": false,
        "word": "disciplinado"
      }
    ],
    "big5_extraversion_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "confiado"
      },
      {
        "perceived_negatively": false,
        "word": "audaz"
      },
      {
        "perceived_negatively": false,
        "word": "seguro"
      },
      {
        "perceived_negatively": false,
        "word": "desinhibido"
      },
      {
        "perceived_negatively": false,
        "word": "valiente"
      },
      {
        "perceived_negatively": false,
        "word": "valiente"
      },
      {
        "perceived_negatively": false,
        "word": "una persona satisfecha de si misma"
      },
      {
        "perceived_negatively": false,
        "word": "vigoroso"
      },
      {
        "perceived_negatively": false,
        "word": "fuerte"
      }
    ],
    "big5_agreeableness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "cínico"
      },
      {
        "perceived_negatively": true,
        "word": "cauto con los demás"
      },
      {
        "perceived_negatively": true,
        "word": "solitario"
      },
      {
        "perceived_negatively": true,
        "word": "desapegado"
      },
      {
        "perceived_negatively": true,
        "word": "impersonal"
      },
      {
        "perceived_negatively": true,
        "word": "sombrío"
      }
    ],
    "big5_neuroticism_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "informal"
      },
      {
        "perceived_negatively": false,
        "word": "de perfil bajo"
      }
    ],
    "big5_neuroticism_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "poco emocional"
      },
      {
        "perceived_negatively": true,
        "word": "insensible"
      },
      {
        "perceived_negatively": true,
        "word": "poco cariñoso"
      },
      {
        "perceived_negatively": true,
        "word": "desapasionado"
      }
    ],
    "big5_extraversion_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "desconfiado"
      },
      {
        "perceived_negatively": false,
        "word": "pesimista"
      },
      {
        "perceived_negatively": false,
        "word": "reservado"
      },
      {
        "perceived_negatively": true,
        "word": "cobarde"
      },
      {
        "perceived_negatively": false,
        "word": "callado"
      }
    ],
    "big5_openness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      },
      {
        "perceived_negatively": false,
        "word": "meditativo"
      },
      {
        "perceived_negatively": false,
        "word": "contemplativo"
      },
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      },
      {
        "perceived_negatively": false,
        "word": "pensativo"
      }
    ],
    "big5_extraversion_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "bullicioso"
      },
      {
        "perceived_negatively": false,
        "word": "travieso"
      },
      {
        "perceived_negatively": false,
        "word": "exhibicionista"
      },
      {
        "perceived_negatively": false,
        "word": "gregario"
      },
      {
        "perceived_negatively": false,
        "word": "demostrativo"
      }
    ],
    "big5_conscientiousness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "revoltoso"
      },
      {
        "perceived_negatively": false,
        "word": "bullicioso"
      },
      {
        "perceived_negatively": true,
        "word": "temerario"
      },
      {
        "perceived_negatively": true,
        "word": "tumultuoso"
      },
      {
        "perceived_negatively": false,
        "word": "demostrativo"
      }
    ],
    "big5_openness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "apasionado"
      },
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": false,
        "word": "sensual"
      }
    ],
    "big5_extraversion_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "social"
      },
      {
        "perceived_negatively": false,
        "word": "enérgico"
      },
      {
        "perceived_negatively": false,
        "word": "entusiasta"
      },
      {
        "perceived_negatively": false,
        "word": "comunicativo"
      },
      {
        "perceived_negatively": false,
        "word": "vibrante"
      },
      {
        "perceived_negatively": false,
        "word": "espirituoso"
      },
      {
        "perceived_negatively": false,
        "word": "magnético"
      },
      {
        "perceived_negatively": false,
        "word": "entusiasta"
      }
    ],
    "big5_neuroticism_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "compulsivo"
      },
      {
        "perceived_negatively": true,
        "word": "inquisitivo"
      },
      {
        "perceived_negatively": true,
        "word": "desenfrenado"
      },
      {
        "perceived_negatively": true,
        "word": "olvidadizo"
      },
      {
        "perceived_negatively": true,
        "word": "impulsivo"
      }
    ],
    "big5_openness_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "poco convencional"
      },
      {
        "perceived_negatively": false,
        "word": "peculiar"
      }
    ],
    "big5_conscientiousness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "indeciso"
      },
      {
        "perceived_negatively": true,
        "word": "una persona sin propósito"
      },
      {
        "perceived_negatively": false,
        "word": "una persona sin carácter"
      },
      {
        "perceived_negatively": false,
        "word": "una persona sin compromiso"
      },
      {
        "perceived_negatively": true,
        "word": "poco ambicioso"
      }
    ],
    "big5_neuroticism_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "detallista"
      },
      {
        "perceived_negatively": true,
        "word": "excitable"
      }
    ]
  },
  "values": {
    "value_self_transcendence": [
      {
        "Term": "Ayudar a los demás",
        "LowDescription": "Cree que las personas pueden encargarse de sus propios asuntos sin interferencia",
        "HighDescription": "Cree que es importante cuidar de las personas que lo rodean"
      },
      {
        "Term": "La justicia",
        "LowDescription": "Cree que son las personas crean sus oportunidades",
        "HighDescription": "Cree en la justicia social y la igualdad para todos"
      },
      {
        "Term": "La justicia social",
        "LowDescription": "Cree que son las personas crean sus oportunidades",
        "HighDescription": "Cree en la justicia social y la igualdad para todos"
      },
      {
        "Term": "La igualdad",
        "LowDescription": "Cree que son las personas crean sus oportunidades",
        "HighDescription": "Cree en la justicia social y la igualdad para todos"
      },
      {
        "Term": "El servicio comunitario",
        "LowDescription": "Cree que las personas pueden encargarse de sus propios asuntos sin interferencia",
        "HighDescription": "Cree que es importante cuidar de las personas que lo rodean"
      }
    ],
    "value_hedonism": [
      {
        "Term": "Disfrutar de la vida",
        "LowDescription": "Prefiere actividades con un propósito más grande que el sólo deleite personal",
        "HighDescription": "Tiene gran motivación por disfrutar la vida en su plenitud"
      }
    ],
    "value_conservation": [
      {
        "Term": "Las tradiciones",
        "LowDescription": "Le importa más seguir su propio camino que seguir el camino de otros",
        "HighDescription": "Tiene mucho respeto por los grupos a los que pertenece y sigue su guía"
      },
      {
        "Term": "La armonía",
        "LowDescription": "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
        "HighDescription": "Cree que las reglas existen por una razón y nunca intenta trasgredirlas"
      },
      {
        "Term": "La humildad",
        "LowDescription": "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
        "HighDescription": "Ve valor en deferir a otros"
      },
      {
        "Term": "Las normas sociales",
        "LowDescription": "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
        "HighDescription": "Cree que las reglas existen por una razón y nunca intenta trasgredirlas"
      },
      {
        "Term": "La seguridad",
        "LowDescription": "Prefiere la seguridad a costa de dejar a un lado sus metas",
        "HighDescription": "Cree que es importante salvaguardar la seguridad"
      },
      {
        "Term": "La seguridad",
        "LowDescription": "Prefiere estar seguro a costa de dejar a un lado sus metas",
        "HighDescription": "Cree que es importante salvaguardar la seguridad"
      }
    ],
    "value_self_enhancement": [
      {
        "Term": "Alcanzar el éxito",
        "LowDescription": "Toma decisiones sin considerar cómo muestran sus talentos",
        "HighDescription": "Busca oportunidades para autosuperase y para demostrar que es una persona capaz"
      },
      {
        "Term": "Mejorar su estatus social",
        "LowDescription": "Está conforme con su estatus social y no siente necesidad de mejorarlo",
        "HighDescription": "Se esfuerza considerablemente para mejorar su estatus e imagen pública"
      },
      {
        "Term": "La ambición",
        "LowDescription": "Está conforme con su estatus social y no siente necesidad de mejorarlo",
        "HighDescription": "Siente que es importante avanzar para alcanzar metas"
      },
      {
        "Term": "Los grandes logros",
        "LowDescription": "Toma decisiones sin considerar cómo muestran sus talentos",
        "HighDescription": "Busca oportunidades para autosuperase y para demostrar que es una persona capaz"
      }
    ],
    "value_openness_to_change": [
      {
        "Term": "Ser independiente",
        "LowDescription": "Recibe de buena manera que otros dirijan sus actividades",
        "HighDescription": "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
      },
      {
        "Term": "La emoción",
        "LowDescription": "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
        "HighDescription": "Está ansioso por buscar experiencias nuevas y emocionantes"
      },
      {
        "Term": "La creatividad",
        "LowDescription": "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
        "HighDescription": "Está ansioso por buscar experiencias nuevas y emocionantes"
      },
      {
        "Term": "La curiosidad",
        "LowDescription": "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
        "HighDescription": "Está ansioso por buscar experiencias nuevas y emocionantes"
      },
      {
        "Term": "La autonomía",
        "LowDescription": "Recibe de buena manera que otros dirijan sus actividades",
        "HighDescription": "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
      },
      {
        "Term": "La libertad",
        "LowDescription": "Recibe de buena manera que otros dirijan sus actividades",
        "HighDescription": "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
      }
    ]
  }
}

},{}],6:[function(require,module,exports){
module.exports={
  "facets": {
    "facet_intellect": {
      "LowTerm": "現実的な",
      "HighDescription": "新しいアイディアに興味をそそられ、進んで受け入れ、探求することを好みます",
      "HighTerm": "哲学的な",
      "LowDescription": "抽象的なアイディアや新しい発想にはあまり目を向けず、現状の世の中にうまく対応していくことを好みます",
      "Big5": "big5_openness"
    },
    "facet_gregariousness": {
      "LowTerm": "自主性の高い",
      "HighDescription": "他の人達と一緒にいることを楽しいと感じます",
      "HighTerm": "社交的な",
      "LowDescription": "自分の時間を大切にしたいという強い願望があります",
      "Big5": "big5_extraversion"
    },
    "facet_achievement_striving": {
      "LowTerm": "現状に満足している",
      "HighDescription": "自分自身に高い目標を持ち、それを達成するために熱心に取り組みます",
      "HighTerm": "やる気がある",
      "LowDescription": "自身の達成レベルに満足していて、大胆な目標を設定する必要を感じていません",
      "Big5": "big5_conscientiousness"
    },
    "facet_depression": {
      "LowTerm": "現状に満足している",
      "HighDescription": "不満に思うことについて常に考えてしまいます",
      "HighTerm": "沈みがちな",
      "LowDescription": "概してあなた自身に満足しています",
      "Big5": "big5_neuroticism"
    },
    "facet_sympathy": {
      "LowTerm": "冷淡な",
      "HighDescription": "他人がどう感じるかを意識し、同情するタイプです",
      "HighTerm": "感情移入する",
      "LowDescription": "他人に頼るよりも、自分自身をもっと頼りにすべきだと考えるタイプです",
      "Big5": "big5_agreeableness"
    },
    "facet_imagination": {
      "LowTerm": "堅実な",
      "HighDescription": "想像力豊かです",
      "HighTerm": "創意に富んでいる",
      "LowDescription": "思い付きよりも事実を選びます",
      "Big5": "big5_openness"
    },
    "facet_self_discipline": {
      "LowTerm": "集中が途切れる",
      "HighDescription": "困難な仕事に取り組み続けることができます",
      "HighTerm": "粘り強い",
      "LowDescription": "長期間にわたって困難な仕事に取り組みつづけることがなかなかできません",
      "Big5": "big5_conscientiousness"
    },
    "facet_assertiveness": {
      "LowTerm": "慎み深い",
      "HighDescription": "遠慮なく発言し、その場をリードする傾向があります。また、集団を統率できます",
      "HighTerm": "自己主張が強い",
      "LowDescription": "特にグループにいる状況では話すことよりも聞くことを好みます",
      "Big5": "big5_extraversion"
    },
    "facet_cheerfulness": {
      "LowTerm": "厳粛な",
      "HighDescription": "喜びにあふれる人で、その喜びを周囲と分かち合います",
      "HighTerm": "快活な",
      "LowDescription": "普段まじめで、あまり冗談を言いません",
      "Big5": "big5_extraversion"
    },
    "facet_self_efficacy": {
      "LowTerm": "自分に自信が持てない",
      "HighDescription": "始めたことを成し遂げる能力があると思っています",
      "HighTerm": "自分に自信がある",
      "LowDescription": "自分の目標達成能力をしばしば疑います",
      "Big5": "big5_conscientiousness"
    },
    "facet_morality": {
      "LowTerm": "対面を気にしない",
      "HighDescription": "他人を利用して成功するのは間違っていると考えます",
      "HighTerm": "名誉を尊重する",
      "LowDescription": "自分が望むものを得るためにあらゆる手段を講じることを心地よく感じます",
      "Big5": "big5_agreeableness"
    },
    "facet_liberalism": {
      "LowTerm": "権威を尊重する",
      "HighDescription": "権威や伝統を守るよりも、より良い方向へ変化させる方が良いと考えます",
      "HighTerm": "権威に挑む",
      "LowDescription": "安定感を大切にし、伝統に従うことを好みます",
      "Big5": "big5_openness"
    },
    "facet_altruism": {
      "LowTerm": "自分本位な",
      "HighDescription": "人を支援することに充実感を覚え、そのように尽力するでしょう",
      "HighTerm": "利他的な",
      "LowDescription": "人のために時間を費やすよりも、自立的に自分のことを自分で行う傾向があります",
      "Big5": "big5_agreeableness"
    },
    "facet_self_consciousness": {
      "LowTerm": "確信を持って行動する",
      "HighDescription": "人からどう思われているかについて神経質になっています",
      "HighTerm": "人目を気にする",
      "LowDescription": "困難を感じたりせず、大抵の場合自信に満ちています",
      "Big5": "big5_neuroticism"
    },
    "facet_vulnerability": {
      "LowTerm": "圧力を受けても冷静な",
      "HighDescription": "ストレスの多い状況下で精神的に押しつぶされ易い傾向があります",
      "HighTerm": "ストレスの影響を受けやすい",
      "LowDescription": "冷静で、予期しない出来事にも効果的に対処します",
      "Big5": "big5_neuroticism"
    },
    "facet_trust": {
      "LowTerm": "用心深い",
      "HighDescription": "何においても人を信じ、容易に信頼します",
      "HighTerm": "人を信じる",
      "LowDescription": "他人の意図を警戒し、容易に信用しません",
      "Big5": "big5_agreeableness"
    },
    "facet_orderliness": {
      "LowTerm": "自由奔放な",
      "HighDescription": "規則正しい生活を強く望んでいます",
      "HighTerm": "几帳面な",
      "LowDescription": "毎日の生活の中で組織のためには多くの時間を割きません",
      "Big5": "big5_conscientiousness"
    },
    "facet_anxiety": {
      "LowTerm": "自分に自信がある",
      "HighDescription": "起こるかもしれないことについて心配する傾向があります",
      "HighTerm": "心配しがちな",
      "LowDescription": "冷静で自信があるように感じる傾向があります",
      "Big5": "big5_neuroticism"
    },
    "facet_friendliness": {
      "LowTerm": "遠慮がちな",
      "HighDescription": "友達を作るのが容易で、他人が近くにいることを快適に感じます",
      "HighTerm": "外向的な",
      "LowDescription": "プライベートな時間を大切にする人で多くの人々を受け入れません",
      "Big5": "big5_extraversion"
    },
    "facet_modesty": {
      "LowTerm": "自己評価が高い",
      "HighDescription": "注目されるのが苦手です",
      "HighTerm": "謙虚な",
      "LowDescription": "自分を高く評価しており、自分に満足しています",
      "Big5": "big5_agreeableness"
    },
    "facet_activity_level": {
      "LowTerm": "のんびりとしている",
      "HighDescription": "ペースが速く、多様な活動でスケジュールを埋めることを好みます",
      "HighTerm": "精力的な",
      "LowDescription": "ゆったりとしたペースの生活を好みます",
      "Big5": "big5_extraversion"
    },
    "facet_cautiousness": {
      "LowTerm": "大胆な",
      "HighDescription": "意思決定する前に注意深く考えます",
      "HighTerm": "慎重な",
      "LowDescription": "時間をかけて慎重に検討するよりもむしろ即座に行動を起こします",
      "Big5": "big5_conscientiousness"
    },
    "facet_dutifulness": {
      "LowTerm": "無頓着な",
      "HighDescription": "ルールや義務が不便であっても真摯に受け止めます",
      "HighTerm": "本分を守る",
      "LowDescription": "ルールや義務を無視してやりたいことをやります",
      "Big5": "big5_conscientiousness"
    },
    "facet_artistic_interests": {
      "LowTerm": "芸術に無関心な",
      "HighDescription": "美を楽しみ、創造的な経験を追求します",
      "HighTerm": "芸術への理解がある",
      "LowDescription": "我々が調査した人々と比べると、芸術や創作活動にあまり関心がないようです",
      "Big5": "big5_openness"
    },
    "facet_immoderation": {
      "LowTerm": "自制心がある",
      "HighDescription": "強い欲求を持っており、それに惑わされます",
      "HighTerm": "快楽主義な",
      "LowDescription": "自分の欲望をコントロールできますし、強烈な欲望を持ちません",
      "Big5": "big5_neuroticism"
    },
    "facet_emotionality": {
      "LowTerm": "感情に流されない",
      "HighDescription": "自分の感情を自覚していて、どう表現すれば良いかわかっています",
      "HighTerm": "情緒的な",
      "LowDescription": "自分の感情についてしきりに考えたり、感情をおおっぴらに表すことはありません",
      "Big5": "big5_openness"
    },
    "facet_adventurousness": {
      "LowTerm": "安定している",
      "HighDescription": "新しい経験をすることを熱望しています",
      "HighTerm": "冒険的な",
      "LowDescription": "いつもの習慣や日課を好み、そこから逸脱することを望みません",
      "Big5": "big5_openness"
    },
    "facet_anger": {
      "LowTerm": "温和な",
      "HighDescription": "特に物事があなたの考えるとおりに行かないときにかっとなる性格です",
      "HighTerm": "熱しやすい",
      "LowDescription": "滅多に怒りません",
      "Big5": "big5_neuroticism"
    },
    "facet_excitement_seeking": {
      "LowTerm": "平穏を求める",
      "HighDescription": "リスクを取ることで高揚し、忙しくないと退屈に感じます",
      "HighTerm": "興奮を求める",
      "LowDescription": "穏やかで和める、安全な活動を好みます",
      "Big5": "big5_extraversion"
    },
    "facet_cooperation": {
      "LowTerm": "固執する",
      "HighDescription": "文句を言うような気難しさがなく、対立を回避しようとします",
      "HighTerm": "柔軟な",
      "LowDescription": "他人と対立することに尻込みしません",
      "Big5": "big5_agreeableness"
    }
  },
  "needs": {
    "need_practicality": [
      "効率",
      "実用性",
      "高価値",
      "利便性"
    ],
    "need_curiosity": [
      "発見",
      "専門性",
      "知識獲得"
    ],
    "need_stability": [
      "安定",
      "信憑性",
      "信用性"
    ],
    "need_self_expression": [
      "自己表現",
      "自己啓発",
      "個人的強み"
    ],
    "need_structure": [
      "組織への帰属",
      "率直さ",
      "明瞭さ",
      "信頼性"
    ],
    "need_challenge": [
      "名声",
      "競争",
      "栄光"
    ],
    "need_liberty": [
      "現代性",
      "可能性拡大",
      "束縛脱出",
      "自発性",
      "斬新さ"
    ],
    "need_harmony": [
      "幸福",
      "礼儀",
      "丁寧さ"
    ],
    "need_love": [
      "つながり",
      "親近感"
    ],
    "need_excitement": [
      "お祭り騒ぎ",
      "期待",
      "うきうきした気分"
    ],
    "need_ideal": [
      "洗練",
      "崇高さ",
      "優越感",
      "満足感"
    ],
    "need_closeness": [
      "帰属",
      "郷愁",
      "親密さ"
    ]
  },
  "phrases": {
    "Experiences that give a sense of %s hold some appeal to you": "%sを感じられる体験に魅力を感じます",
    "You consider %s to guide a large part of what you do": "%sがあなたの行動に大きな影響を与えています",
    "You value both %s a bit": "両方の%sを少し評価します",
    "And %s": "また%s",
    "And you are %s": "また、%sタイプです",
    "a bit %s": "少し%s",
    "can be perceived as %s": "%s人と思われるかもしれない",
    "You are relatively unconcerned with both %s and %s": "%sと%sの両方にあまりこだわりません",
    "You are %s and %s": "%sタイプであり、また%sタイプです",
    "You value both %s and %s a bit": "%s と%sの両方が少しばかり有用と考えています",
    "You don't find %s to be particularly motivating for you": "%sには特に関心がありません",
    "You are %s": "%sタイプです",
    "You are %s, %s and %s": "%sタイプであり、%sタイプであり、また%sタイプです",
    "Your choices are driven by a desire for %s": "%sを意識して意思決定するタイプです",
    "You are motivated to seek out experiences that provide a strong feeling of %s": "%sにつながる体験を好みます",
    "Experiences that make you feel high %s are generally unappealing to you": "気分が高揚する経験の%sには慨して魅力を感じません",
    "You don't find either %s or %s to be particularly motivating for you": "%s、%sのいずれも関心がありません",
    "You are relatively unconcerned with %s": "%sにはあまりこだわりません",
    "somewhat %s": "多少%s",
    "You value %s a bit more": "%sを多少有用だと考えています",
    "You consider both %s and %s to guide a large part of what you do": "方針を決める際に%sと%sの両方を重要とみなします"
  },
  "traits": {
    "big5_conscientiousness_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "厳格な"
      },
      {
        "perceived_negatively": false,
        "word": "忠実な"
      },
      {
        "perceived_negatively": false,
        "word": "剛直な"
      }
    ],
    "big5_neuroticism_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "ガードが堅い"
      },
      {
        "perceived_negatively": true,
        "word": "いらいらしやすい"
      },
      {
        "perceived_negatively": true,
        "word": "自分に確信が持てない"
      },
      {
        "perceived_negatively": true,
        "word": "悲観的な"
      },
      {
        "perceived_negatively": false,
        "word": "秘密にしたがる"
      },
      {
        "perceived_negatively": true,
        "word": "心配性の"
      },
      {
        "perceived_negatively": true,
        "word": "ものごとを否定的に捉える"
      },
      {
        "perceived_negatively": false,
        "word": "自分に厳しい"
      }
    ],
    "big5_agreeableness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": true,
        "word": "気配りが苦手な"
      },
      {
        "perceived_negatively": true,
        "word": "よそよそしい"
      },
      {
        "perceived_negatively": true,
        "word": "冷静な"
      },
      {
        "perceived_negatively": true,
        "word": "感情に流されない"
      }
    ],
    "big5_agreeableness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "情にもろい"
      },
      {
        "perceived_negatively": false,
        "word": "優しい"
      },
      {
        "perceived_negatively": false,
        "word": "活気にあふれる"
      },
      {
        "perceived_negatively": false,
        "word": "柔和な"
      },
      {
        "perceived_negatively": false,
        "word": "情熱的"
      },
      {
        "perceived_negatively": false,
        "word": "ロマンチストの"
      }
    ],
    "big5_conscientiousness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "形式張らない"
      },
      {
        "perceived_negatively": false,
        "word": "地味な"
      }
    ],
    "big5_agreeableness_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "控えめな"
      },
      {
        "perceived_negatively": false,
        "word": "でしゃばらない"
      }
    ],
    "big5_conscientiousness_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "頼りになる"
      },
      {
        "perceived_negatively": false,
        "word": "責任感がある"
      },
      {
        "perceived_negatively": false,
        "word": "信頼できる"
      },
      {
        "perceived_negatively": false,
        "word": "礼儀正しい"
      },
      {
        "perceived_negatively": false,
        "word": "思いやりのある"
      }
    ],
    "big5_agreeableness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "頑固な"
      },
      {
        "perceived_negatively": true,
        "word": "飛躍が多い"
      },
      {
        "perceived_negatively": true,
        "word": "荒削りな"
      },
      {
        "perceived_negatively": true,
        "word": "好戦的な"
      },
      {
        "perceived_negatively": true,
        "word": "大まかな"
      },
      {
        "perceived_negatively": false,
        "word": "ちゃめっ気のある"
      },
      {
        "perceived_negatively": true,
        "word": "巧みな"
      },
      {
        "perceived_negatively": true,
        "word": "飾り気のない"
      },
      {
        "perceived_negatively": true,
        "word": "疑われやすい"
      }
    ],
    "big5_neuroticism_plus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "すぐに慌ててしまう"
      },
      {
        "perceived_negatively": false,
        "word": "つい腹を立てやすい"
      },
      {
        "perceived_negatively": false,
        "word": "気遣う"
      }
    ],
    "big5_openness_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": true,
        "word": "簡素好きな"
      },
      {
        "perceived_negatively": true,
        "word": "人に頼りがちなの"
      }
    ],
    "big5_neuroticism_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "沈着な"
      },
      {
        "perceived_negatively": true,
        "word": "気配りが苦手な"
      }
    ],
    "big5_agreeableness_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "猪突猛進な"
      },
      {
        "perceived_negatively": true,
        "word": "儀礼にこだわらない、単刀直入な"
      },
      {
        "perceived_negatively": true,
        "word": "全面的には信頼しない"
      },
      {
        "perceived_negatively": true,
        "word": "安易に協調せず、自分の信念を貫く"
      },
      {
        "perceived_negatively": true,
        "word": "議論より実践の"
      }
    ],
    "big5_extraversion_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "活発な"
      },
      {
        "perceived_negatively": false,
        "word": "競争力がある"
      },
      {
        "perceived_negatively": false,
        "word": "粘り強い"
      },
      {
        "perceived_negatively": false,
        "word": "意欲的な"
      },
      {
        "perceived_negatively": false,
        "word": "決断力がある"
      }
    ],
    "big5_agreeableness_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "忠実な"
      },
      {
        "perceived_negatively": false,
        "word": "剛直な"
      },
      {
        "perceived_negatively": true,
        "word": "厳格な"
      }
    ],
    "big5_neuroticism_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "忍耐強い"
      },
      {
        "perceived_negatively": false,
        "word": "リラックスしている"
      },
      {
        "perceived_negatively": false,
        "word": "多くを要求しない"
      },
      {
        "perceived_negatively": false,
        "word": "現実的な"
      },
      {
        "perceived_negatively": false,
        "word": "楽観的な"
      },
      {
        "perceived_negatively": false,
        "word": "思いやりのある"
      },
      {
        "perceived_negatively": false,
        "word": "批判することを遠慮する"
      },
      {
        "perceived_negatively": false,
        "word": "控えめ"
      }
    ],
    "big5_openness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "平均的な"
      },
      {
        "perceived_negatively": true,
        "word": "いたって普通な"
      },
      {
        "perceived_negatively": false,
        "word": "気分が沈みがちな"
      },
      {
        "perceived_negatively": true,
        "word": "何事にも関心を持たない"
      },
      {
        "perceived_negatively": true,
        "word": "冒険を好まない"
      }
    ],
    "big5_extraversion_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "自説を曲げない"
      },
      {
        "perceived_negatively": true,
        "word": "強引なところがある"
      },
      {
        "perceived_negatively": true,
        "word": "支配力を追い求める"
      },
      {
        "perceived_negatively": true,
        "word": "自慢好きな"
      },
      {
        "perceived_negatively": true,
        "word": "親分風の"
      },
      {
        "perceived_negatively": false,
        "word": "支配的な"
      },
      {
        "perceived_negatively": false,
        "word": "抜け目のない"
      }
    ],
    "big5_neuroticism_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "気まぐれな"
      },
      {
        "perceived_negatively": true,
        "word": "熱くなりやすい"
      },
      {
        "perceived_negatively": true,
        "word": "口論好きの"
      },
      {
        "perceived_negatively": true,
        "word": "性急な"
      },
      {
        "perceived_negatively": true,
        "word": "ご機嫌斜めの"
      },
      {
        "perceived_negatively": true,
        "word": "怒りっぽい"
      },
      {
        "perceived_negatively": true,
        "word": "奇妙な"
      }
    ],
    "big5_neuroticism_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "興奮しやすい"
      },
      {
        "perceived_negatively": true,
        "word": "言葉が多い"
      },
      {
        "perceived_negatively": false,
        "word": "異性の気を引こうとする"
      },
      {
        "perceived_negatively": true,
        "word": "熱くなりやすい"
      },
      {
        "perceived_negatively": false,
        "word": "ひどく気前が良い"
      },
      {
        "perceived_negatively": true,
        "word": "移り気な"
      }
    ],
    "big5_agreeableness_minus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "大雑把な"
      },
      {
        "perceived_negatively": true,
        "word": "機転の利かない"
      },
      {
        "perceived_negatively": true,
        "word": "素っ気ない"
      },
      {
        "perceived_negatively": true,
        "word": "心にゆとりがない"
      },
      {
        "perceived_negatively": true,
        "word": "情にほだされない"
      },
      {
        "perceived_negatively": true,
        "word": "断固とした"
      },
      {
        "perceived_negatively": true,
        "word": "手加減できない"
      },
      {
        "perceived_negatively": true,
        "word": "執念深い"
      }
    ],
    "big5_conscientiousness_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "控えめ"
      },
      {
        "perceived_negatively": false,
        "word": "でしゃばらない"
      }
    ],
    "big5_agreeableness_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "愛想の良い"
      },
      {
        "perceived_negatively": false,
        "word": "如才ない"
      },
      {
        "perceived_negatively": false,
        "word": "駆引きがうまい"
      },
      {
        "perceived_negatively": false,
        "word": "深みがある"
      },
      {
        "perceived_negatively": false,
        "word": "理想家の"
      }
    ],
    "big5_agreeableness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "批判的な"
      },
      {
        "perceived_negatively": true,
        "word": "利己的な"
      },
      {
        "perceived_negatively": true,
        "word": "怒りっぽい"
      },
      {
        "perceived_negatively": true,
        "word": "対立する"
      },
      {
        "perceived_negatively": true,
        "word": "ご機嫌斜めの"
      },
      {
        "perceived_negatively": true,
        "word": "厳しい"
      },
      {
        "perceived_negatively": true,
        "word": "社交が苦手な"
      },
      {
        "perceived_negatively": true,
        "word": "人に要求しがちな"
      }
    ],
    "big5_openness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "沈着な"
      },
      {
        "perceived_negatively": true,
        "word": "気配りが苦手な"
      }
    ],
    "big5_conscientiousness_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "洗練されている"
      },
      {
        "perceived_negatively": false,
        "word": "完璧を追求する"
      },
      {
        "perceived_negatively": false,
        "word": "勤勉な"
      },
      {
        "perceived_negatively": false,
        "word": "品位がある"
      },
      {
        "perceived_negatively": false,
        "word": "上品な"
      },
      {
        "perceived_negatively": false,
        "word": "教養がある"
      },
      {
        "perceived_negatively": false,
        "word": "先見の明のある"
      }
    ],
    "big5_agreeableness_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "鋭敏な"
      },
      {
        "perceived_negatively": false,
        "word": "風変わりな"
      },
      {
        "perceived_negatively": false,
        "word": "個性的な"
      }
    ],
    "big5_neuroticism_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "興奮しやすい"
      },
      {
        "perceived_negatively": false,
        "word": "情熱的"
      },
      {
        "perceived_negatively": false,
        "word": "肉感的な"
      }
    ],
    "big5_neuroticism_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "情に厚い"
      },
      {
        "perceived_negatively": false,
        "word": "多芸な"
      },
      {
        "perceived_negatively": false,
        "word": "創造的な"
      },
      {
        "perceived_negatively": false,
        "word": "知的な"
      },
      {
        "perceived_negatively": false,
        "word": "洞察力がある"
      }
    ],
    "big5_openness_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "慣習を重んじる"
      },
      {
        "perceived_negatively": false,
        "word": "伝統を守る"
      }
    ],
    "big5_extraversion_plus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "言葉数が多い"
      },
      {
        "perceived_negatively": true,
        "word": "めんどくさがりな"
      },
      {
        "perceived_negatively": true,
        "word": "気取った"
      }
    ],
    "big5_extraversion_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "内部志向型な"
      },
      {
        "perceived_negatively": false,
        "word": "内省的な"
      },
      {
        "perceived_negatively": false,
        "word": "よく瞑想にふける"
      },
      {
        "perceived_negatively": false,
        "word": "熟考する"
      },
      {
        "perceived_negatively": false,
        "word": "自省する"
      }
    ],
    "big5_openness_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "目の前のことに専念する"
      },
      {
        "perceived_negatively": false,
        "word": "型破りな"
      },
      {
        "perceived_negatively": true,
        "word": "理屈に拘らない"
      },
      {
        "perceived_negatively": true,
        "word": "子どもっぽい"
      },
      {
        "perceived_negatively": true,
        "word": "ぶっつけ本番、出たとこ勝負の"
      },
      {
        "perceived_negatively": false,
        "word": "曖昧な"
      },
      {
        "perceived_negatively": true,
        "word": "浮ついたところのある"
      }
    ],
    "big5_extraversion_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "物静かな"
      },
      {
        "perceived_negatively": false,
        "word": "落ち着いている"
      },
      {
        "perceived_negatively": false,
        "word": "穏やかな"
      },
      {
        "perceived_negatively": false,
        "word": "偏見がない"
      },
      {
        "perceived_negatively": false,
        "word": "高ぶらない"
      },
      {
        "perceived_negatively": false,
        "word": "素直な"
      }
    ],
    "big5_conscientiousness_plus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "伝統を守る"
      },
      {
        "perceived_negatively": false,
        "word": "慣習を重んじる"
      }
    ],
    "big5_openness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "創造的な"
      },
      {
        "perceived_negatively": false,
        "word": "知的な"
      },
      {
        "perceived_negatively": false,
        "word": "洞察力がある"
      },
      {
        "perceived_negatively": false,
        "word": "多芸な"
      },
      {
        "perceived_negatively": false,
        "word": "創造性がある"
      }
    ],
    "big5_agreeableness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "心が優しい"
      },
      {
        "perceived_negatively": false,
        "word": "快い"
      },
      {
        "perceived_negatively": false,
        "word": "好意的な"
      },
      {
        "perceived_negatively": false,
        "word": "控えめな"
      },
      {
        "perceived_negatively": true,
        "word": "慈悲深い"
      }
    ],
    "big5_extraversion_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "鵜呑みにしない"
      },
      {
        "perceived_negatively": true,
        "word": "精力的でない"
      },
      {
        "perceived_negatively": true,
        "word": "対応がゆっくりな"
      },
      {
        "perceived_negatively": true,
        "word": "持続力に欠ける"
      },
      {
        "perceived_negatively": true,
        "word": "あやふやな"
      }
    ],
    "big5_openness_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "分析好きな"
      },
      {
        "perceived_negatively": false,
        "word": "明敏な"
      },
      {
        "perceived_negatively": false,
        "word": "物知りな"
      },
      {
        "perceived_negatively": false,
        "word": "明確に述べる"
      },
      {
        "perceived_negatively": false,
        "word": "品位がある"
      },
      {
        "perceived_negatively": false,
        "word": "教養がある"
      }
    ],
    "big5_openness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "言葉数が多い"
      },
      {
        "perceived_negatively": true,
        "word": "めんどくさがりな"
      },
      {
        "perceived_negatively": true,
        "word": "気取った"
      }
    ],
    "big5_conscientiousness_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "気が早い"
      },
      {
        "perceived_negatively": true,
        "word": "安易に協調せず、自分の信念を貫く"
      },
      {
        "perceived_negatively": true,
        "word": "頼りない"
      },
      {
        "perceived_negatively": true,
        "word": "全面的には信頼しない"
      },
      {
        "perceived_negatively": true,
        "word": "議論より実践の"
      }
    ],
    "big5_agreeableness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "寛大な"
      },
      {
        "perceived_negatively": false,
        "word": "愉快な"
      },
      {
        "perceived_negatively": false,
        "word": "寛容な"
      },
      {
        "perceived_negatively": false,
        "word": "平和的な"
      },
      {
        "perceived_negatively": false,
        "word": "柔軟な"
      },
      {
        "perceived_negatively": false,
        "word": "気楽な"
      },
      {
        "perceived_negatively": false,
        "word": "フェアな"
      },
      {
        "perceived_negatively": false,
        "word": "慈悲深い"
      },
      {
        "perceived_negatively": false,
        "word": "信じやすい"
      }
    ],
    "big5_openness_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "鋭敏な"
      },
      {
        "perceived_negatively": false,
        "word": "変わった"
      },
      {
        "perceived_negatively": false,
        "word": "個性的な"
      }
    ],
    "big5_conscientiousness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "意欲的な"
      },
      {
        "perceived_negatively": false,
        "word": "注意深い"
      },
      {
        "perceived_negatively": false,
        "word": "堅固な"
      },
      {
        "perceived_negatively": false,
        "word": "決断力がある"
      },
      {
        "perceived_negatively": false,
        "word": "競争力がある"
      }
    ],
    "big5_openness_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "理想家の"
      },
      {
        "perceived_negatively": false,
        "word": "駆引きがうまい"
      },
      {
        "perceived_negatively": false,
        "word": "深みがある"
      },
      {
        "perceived_negatively": false,
        "word": "如才ない"
      },
      {
        "perceived_negatively": false,
        "word": "愛想の良い"
      }
    ],
    "big5_conscientiousness_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "型破りな"
      },
      {
        "perceived_negatively": true,
        "word": "理屈に拘らない"
      },
      {
        "perceived_negatively": true,
        "word": "子どもっぽい"
      },
      {
        "perceived_negatively": true,
        "word": "ぶっつけ本番、出たとこ勝負の"
      },
      {
        "perceived_negatively": false,
        "word": "曖昧な"
      },
      {
        "perceived_negatively": true,
        "word": "浮ついたところのある"
      }
    ],
    "big5_conscientiousness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "独特な"
      },
      {
        "perceived_negatively": true,
        "word": "緊張しがちな"
      }
    ],
    "big5_neuroticism_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "気取らない"
      },
      {
        "perceived_negatively": false,
        "word": "物事に飽きない"
      },
      {
        "perceived_negatively": false,
        "word": "不屈な"
      }
    ],
    "big5_openness_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "大雑把な"
      },
      {
        "perceived_negatively": true,
        "word": "機転の利かない"
      },
      {
        "perceived_negatively": true,
        "word": "素っ気ない"
      },
      {
        "perceived_negatively": true,
        "word": "心にゆとりがない"
      },
      {
        "perceived_negatively": true,
        "word": "情にほだされない"
      }
    ],
    "big5_neuroticism_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "情緒的な"
      },
      {
        "perceived_negatively": true,
        "word": "疑うことを知らない"
      },
      {
        "perceived_negatively": false,
        "word": "優しい"
      },
      {
        "perceived_negatively": false,
        "word": "敏感な"
      },
      {
        "perceived_negatively": false,
        "word": "柔和な"
      }
    ],
    "big5_extraversion_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "非攻撃的な"
      },
      {
        "perceived_negatively": false,
        "word": "控えめな"
      },
      {
        "perceived_negatively": false,
        "word": "素直に対応する"
      },
      {
        "perceived_negatively": false,
        "word": "気が小さい"
      },
      {
        "perceived_negatively": false,
        "word": "適合力のある"
      },
      {
        "perceived_negatively": false,
        "word": "単純な"
      }
    ],
    "big5_agreeableness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "はしゃぐ"
      },
      {
        "perceived_negatively": false,
        "word": "幸福そうな"
      },
      {
        "perceived_negatively": false,
        "word": "親しみやすい"
      },
      {
        "perceived_negatively": false,
        "word": "面白い"
      },
      {
        "perceived_negatively": false,
        "word": "陽気な"
      },
      {
        "perceived_negatively": false,
        "word": "ユーモアがある"
      }
    ],
    "big5_openness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "世知に長けた"
      },
      {
        "perceived_negatively": false,
        "word": "劇場的な"
      },
      {
        "perceived_negatively": false,
        "word": "雄弁な"
      },
      {
        "perceived_negatively": false,
        "word": "探究的な"
      },
      {
        "perceived_negatively": false,
        "word": "情熱的な"
      }
    ],
    "big5_extraversion_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "気分が沈みがちな"
      },
      {
        "perceived_negatively": true,
        "word": "おとなしい"
      },
      {
        "perceived_negatively": true,
        "word": "冒険を好まない"
      },
      {
        "perceived_negatively": false,
        "word": "受け身な"
      },
      {
        "perceived_negatively": true,
        "word": "何事にも関心を持たない"
      },
      {
        "perceived_negatively": false,
        "word": "素直な"
      }
    ],
    "big5_extraversion_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "節度がある"
      },
      {
        "perceived_negatively": false,
        "word": "まじめな"
      },
      {
        "perceived_negatively": false,
        "word": "慎重な"
      },
      {
        "perceived_negatively": false,
        "word": "用心深い"
      },
      {
        "perceived_negatively": false,
        "word": "信念を持ってる"
      }
    ],
    "big5_neuroticism_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "高ぶらない"
      },
      {
        "perceived_negatively": true,
        "word": "興奮しない"
      },
      {
        "perceived_negatively": false,
        "word": "穏やかな"
      },
      {
        "perceived_negatively": false,
        "word": "物静かな"
      }
    ],
    "big5_extraversion_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "熱くなりやすい"
      },
      {
        "perceived_negatively": true,
        "word": "言葉が多い"
      },
      {
        "perceived_negatively": false,
        "word": "ひどく気前が良い"
      },
      {
        "perceived_negatively": true,
        "word": "気まぐれな"
      },
      {
        "perceived_negatively": false,
        "word": "異性の気を引こうとする"
      }
    ],
    "big5_extraversion_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "表現に富む"
      },
      {
        "perceived_negatively": false,
        "word": "率直な"
      },
      {
        "perceived_negatively": false,
        "word": "ドラマティックな"
      },
      {
        "perceived_negatively": false,
        "word": "自発的な"
      },
      {
        "perceived_negatively": false,
        "word": "機知に富んでいる"
      },
      {
        "perceived_negatively": false,
        "word": "機を見るに敏な"
      },
      {
        "perceived_negatively": false,
        "word": "自立している"
      }
    ],
    "big5_conscientiousness_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "慣例にとらわれない"
      },
      {
        "perceived_negatively": false,
        "word": "奇抜な"
      }
    ],
    "big5_extraversion_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "物事に懐疑的な"
      },
      {
        "perceived_negatively": false,
        "word": "人に用心深い"
      },
      {
        "perceived_negatively": true,
        "word": "引っ込み思案な"
      },
      {
        "perceived_negatively": true,
        "word": "無口な"
      },
      {
        "perceived_negatively": true,
        "word": "社交が苦手な"
      },
      {
        "perceived_negatively": true,
        "word": "心配そうな"
      },
      {
        "perceived_negatively": true,
        "word": "私心がない"
      },
      {
        "perceived_negatively": false,
        "word": "超然とした"
      }
    ],
    "big5_conscientiousness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "ぼーっとしてる"
      },
      {
        "perceived_negatively": true,
        "word": "臨機応変な"
      },
      {
        "perceived_negatively": true,
        "word": "風変わりな"
      },
      {
        "perceived_negatively": true,
        "word": "忘れっぽい"
      },
      {
        "perceived_negatively": true,
        "word": "衝動的な"
      },
      {
        "perceived_negatively": true,
        "word": "勝手気ままな"
      }
    ],
    "big5_conscientiousness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "徹底している"
      },
      {
        "perceived_negatively": false,
        "word": "着実な"
      },
      {
        "perceived_negatively": false,
        "word": "一貫している"
      },
      {
        "perceived_negatively": false,
        "word": "自制力がある"
      },
      {
        "perceived_negatively": false,
        "word": "論理的"
      },
      {
        "perceived_negatively": false,
        "word": "決定力のある"
      },
      {
        "perceived_negatively": false,
        "word": "統制された"
      },
      {
        "perceived_negatively": false,
        "word": "簡潔な"
      }
    ],
    "big5_openness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "すぐに慌ててしまう"
      },
      {
        "perceived_negatively": false,
        "word": "つい腹を立てやすい"
      },
      {
        "perceived_negatively": false,
        "word": "気遣う"
      }
    ],
    "big5_agreeableness_plus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "人に頼りがちな"
      },
      {
        "perceived_negatively": true,
        "word": "簡素好きな"
      }
    ],
    "big5_conscientiousness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "用心深い"
      },
      {
        "perceived_negatively": false,
        "word": "自信のある"
      },
      {
        "perceived_negatively": false,
        "word": "時間厳守する"
      },
      {
        "perceived_negatively": false,
        "word": "儀礼的な"
      },
      {
        "perceived_negatively": false,
        "word": "やりくりがうまい"
      },
      {
        "perceived_negatively": false,
        "word": "信念を持ってる"
      }
    ],
    "big5_agreeableness_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "役立つ"
      },
      {
        "perceived_negatively": false,
        "word": "協力的な"
      },
      {
        "perceived_negatively": false,
        "word": "思いやりのある"
      },
      {
        "perceived_negatively": false,
        "word": "礼儀正しい"
      },
      {
        "perceived_negatively": false,
        "word": "丁寧な"
      },
      {
        "perceived_negatively": false,
        "word": "道理をわきまえる"
      },
      {
        "perceived_negatively": false,
        "word": "丁重な"
      },
      {
        "perceived_negatively": false,
        "word": "思慮深い"
      },
      {
        "perceived_negatively": false,
        "word": "忠実な"
      },
      {
        "perceived_negatively": false,
        "word": "モラルがある"
      }
    ],
    "big5_neuroticism_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "合理的な"
      },
      {
        "perceived_negatively": false,
        "word": "公平な"
      },
      {
        "perceived_negatively": false,
        "word": "着実な"
      },
      {
        "perceived_negatively": false,
        "word": "論理的"
      },
      {
        "perceived_negatively": false,
        "word": "決定力のある"
      },
      {
        "perceived_negatively": false,
        "word": "落ち着いている"
      },
      {
        "perceived_negatively": false,
        "word": "簡潔な"
      },
      {
        "perceived_negatively": false,
        "word": "徹底している"
      },
      {
        "perceived_negatively": false,
        "word": "経済的な"
      },
      {
        "perceived_negatively": false,
        "word": "自制力がある"
      }
    ],
    "big5_extraversion_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "自信のある"
      },
      {
        "perceived_negatively": false,
        "word": "大胆な"
      },
      {
        "perceived_negatively": false,
        "word": "確信を持った"
      },
      {
        "perceived_negatively": false,
        "word": "単刀直入な"
      },
      {
        "perceived_negatively": false,
        "word": "精神的に強い"
      },
      {
        "perceived_negatively": false,
        "word": "困難に立ち向かう"
      },
      {
        "perceived_negatively": false,
        "word": "自己に満足している"
      },
      {
        "perceived_negatively": false,
        "word": "元気いっぱいな"
      },
      {
        "perceived_negatively": false,
        "word": "たくましい"
      }
    ],
    "big5_agreeableness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "斜に構えた"
      },
      {
        "perceived_negatively": true,
        "word": "人に用心深い"
      },
      {
        "perceived_negatively": true,
        "word": "引っ込み思案な"
      },
      {
        "perceived_negatively": true,
        "word": "私心がない"
      },
      {
        "perceived_negatively": true,
        "word": "客観的な"
      },
      {
        "perceived_negatively": true,
        "word": "心配そうな"
      }
    ],
    "big5_neuroticism_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "形式張らない"
      },
      {
        "perceived_negatively": false,
        "word": "地味な"
      }
    ],
    "big5_neuroticism_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "感情に流されない"
      },
      {
        "perceived_negatively": true,
        "word": "気配りが苦手な"
      },
      {
        "perceived_negatively": true,
        "word": "よそよそしい"
      },
      {
        "perceived_negatively": true,
        "word": "冷静な"
      }
    ],
    "big5_extraversion_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "ガードが堅い"
      },
      {
        "perceived_negatively": false,
        "word": "悲観的な"
      },
      {
        "perceived_negatively": false,
        "word": "隠したがる"
      },
      {
        "perceived_negatively": true,
        "word": "気の小さい"
      },
      {
        "perceived_negatively": false,
        "word": "隠したがる"
      }
    ],
    "big5_openness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "内省的な"
      },
      {
        "perceived_negatively": false,
        "word": "よく瞑想にふける"
      },
      {
        "perceived_negatively": false,
        "word": "熟考する"
      },
      {
        "perceived_negatively": false,
        "word": "自省する"
      },
      {
        "perceived_negatively": false,
        "word": "内部志向型な"
      }
    ],
    "big5_extraversion_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "ひどく陽気な"
      },
      {
        "perceived_negatively": false,
        "word": "いたずら好きな"
      },
      {
        "perceived_negatively": false,
        "word": "自己の主張に強い信念をもっている"
      },
      {
        "perceived_negatively": false,
        "word": "社交的な"
      },
      {
        "perceived_negatively": false,
        "word": "感情を表に出す"
      }
    ],
    "big5_conscientiousness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "気ままな"
      },
      {
        "perceived_negatively": false,
        "word": "ひどく陽気な"
      },
      {
        "perceived_negatively": true,
        "word": "向こう見ずな"
      },
      {
        "perceived_negatively": true,
        "word": "がむしゃらな"
      },
      {
        "perceived_negatively": false,
        "word": "感情を表に出す"
      }
    ],
    "big5_openness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "情熱的"
      },
      {
        "perceived_negatively": false,
        "word": "興奮しやすい"
      },
      {
        "perceived_negatively": false,
        "word": "肉感的な"
      }
    ],
    "big5_extraversion_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "社会的な"
      },
      {
        "perceived_negatively": false,
        "word": "精力的な"
      },
      {
        "perceived_negatively": false,
        "word": "熱中しやすい"
      },
      {
        "perceived_negatively": false,
        "word": "おしゃべり好きな"
      },
      {
        "perceived_negatively": false,
        "word": "敏感な"
      },
      {
        "perceived_negatively": false,
        "word": "元気な"
      },
      {
        "perceived_negatively": false,
        "word": "人をひきつける"
      },
      {
        "perceived_negatively": false,
        "word": "何事にも熱心な"
      }
    ],
    "big5_neuroticism_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "何かをせずにいられない"
      },
      {
        "perceived_negatively": true,
        "word": "おせっかいな"
      },
      {
        "perceived_negatively": true,
        "word": "気ままな"
      },
      {
        "perceived_negatively": true,
        "word": "忘れやすい"
      },
      {
        "perceived_negatively": true,
        "word": "衝動的な"
      }
    ],
    "big5_openness_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "慣例にとらわれない"
      },
      {
        "perceived_negatively": false,
        "word": "奇抜な"
      }
    ],
    "big5_conscientiousness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "優柔不断な"
      },
      {
        "perceived_negatively": true,
        "word": "目的がない"
      },
      {
        "perceived_negatively": false,
        "word": "気が抜けている"
      },
      {
        "perceived_negatively": false,
        "word": "当り障りがない"
      },
      {
        "perceived_negatively": true,
        "word": "野心的でない"
      }
    ],
    "big5_neuroticism_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "独特な"
      },
      {
        "perceived_negatively": true,
        "word": "神経質な"
      }
    ]
  },
  "values": {
    "value_self_transcendence": [
      {
        "Term": "他人への支援",
        "LowDescription": "人は干渉されずに自分で物事に対処できると思われています",
        "HighDescription": "自分のまわりの人々を世話することは重要であると考えます"
      },
      {
        "Term": "公平",
        "LowDescription": "人は自ら機会を作っていくものと信じます",
        "HighDescription": "社会正義と全ての人の平等を信じます"
      },
      {
        "Term": "社会正義",
        "LowDescription": "人は自ら機会を作っていくものと信じます",
        "HighDescription": "社会正義と全ての人の平等を信じます"
      },
      {
        "Term": "平等",
        "LowDescription": "人は自ら機会を作っていくものと信じます",
        "HighDescription": "社会正義と全ての人の平等を信じます"
      },
      {
        "Term": "コミュニティ・サービス",
        "LowDescription": "干渉されずに自分で物事に対処できると思われています",
        "HighDescription": "自分のまわりの人々を世話することは重要であると考えます"
      }
    ],
    "value_hedonism": [
      {
        "Term": "生活を楽しむこと",
        "LowDescription": "単なる個人の楽しみよりも大きな目標を伴う行動を優先します",
        "HighDescription": "人生を最大限に楽しもうとしています"
      }
    ],
    "value_conservation": [
      {
        "Term": "伝統",
        "LowDescription": "人が通った道よりもわが道を行くことを大切にします",
        "HighDescription": "自分が属するグループに敬意を払い、それらのガイダンスに従います"
      },
      {
        "Term": "調和",
        "LowDescription": "何が正しいか、他人がどう思うかではなく、自分の信条で決定します",
        "HighDescription": "規則は理由があって存在すると知っており、それらを破らないようにしています"
      },
      {
        "Term": "謙虚",
        "LowDescription": "何が正しいか、他人がどう思うかではなく、自分の信条で決定します",
        "HighDescription": "他人に従うことに価値を見出します"
      },
      {
        "Term": "社会規範",
        "LowDescription": "何が正しいか、他人がどう思うかではなく、自分の信条で決定します",
        "HighDescription": "規則は理由があって存在すると知っており、それらを破らないようにしています"
      },
      {
        "Term": "セキュリティー",
        "LowDescription": "目的を達成するためにはセキュリティーが犠牲になってもよいと信じます",
        "HighDescription": "安全性とセキュリティーは守るべき重要なものであると信じます"
      },
      {
        "Term": "安全性",
        "LowDescription": "目的を達成するためには安全性が犠牲になってもよいと信じます",
        "HighDescription": "安全性とセキュリティは守るべき重要なものであると信じます"
      }
    ],
    "value_self_enhancement": [
      {
        "Term": "成功すること",
        "LowDescription": "自分の才能を誇示することにあまり拘らず意思決定します",
        "HighDescription": "自分自身を向上させ、自分が有能な人であることを実証する機会を探しています"
      },
      {
        "Term": "社会的地位の獲得",
        "LowDescription": "社会的地位に満足していて、それ以上を強くは望んでいません",
        "HighDescription": "自分の地位と世間体を向上するために相当な努力を行います"
      },
      {
        "Term": "野心",
        "LowDescription": "社会的地位に満足していて、それ以上を強くは望んでいません",
        "HighDescription": "ゴールへ突き進むことが重要であると感じます"
      },
      {
        "Term": "大成功",
        "LowDescription": "自分の才能を誇示することにあまり拘らず意思決定します",
        "HighDescription": "自分自身を向上させ、自分が有能な人であることを実証する機会を探しています"
      }
    ],
    "value_openness_to_change": [
      {
        "Term": "自主性",
        "LowDescription": "他人が自分の行動の指揮をとることを受け入れます",
        "HighDescription": "最高の成果が得られるよう、自分自身で目標を設定する傾向があります"
      },
      {
        "Term": "興奮",
        "LowDescription": "危険を冒して新しいことに挑むより、悪くないと分かっていることを選びます",
        "HighDescription": "新しく刺激的な経験をすることを熱望しています"
      },
      {
        "Term": "創造性",
        "LowDescription": "危険を冒して新しいことに挑むより、悪くないと分かっていることを選びます",
        "HighDescription": "新しく刺激的な経験をすることを熱望しています"
      },
      {
        "Term": "好奇心",
        "LowDescription": "危険を冒して新しいことに挑むより、悪くないと分かっていることを選びます",
        "HighDescription": "新しく刺激的な経験をすることを熱望しています"
      },
      {
        "Term": "主体性",
        "LowDescription": "他人が自分の行動の指揮をとることを受け入れます",
        "HighDescription": "最高の成果が得られるよう、自分自身で目標を設定する傾向があります"
      },
      {
        "Term": "自由",
        "LowDescription": "他人が自分の行動の指揮をとることを受け入れます",
        "HighDescription": "最高の成果が得られるよう、自分自身で目標を設定する傾向があります"
      }
    ]
  }
}

},{}],7:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],8:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {
  'en': require('./en'),
  'es': require('./es'),
  'ja': require('./ja')
};

},{"./en":9,"./es":10,"./ja":12}],9:[function(require,module,exports){
'use strict';
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../../locales/v2/en');

},{"../../../locales/v2/en":1}],10:[function(require,module,exports){
'use strict';
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../../locales/v2/es');

},{"../../../locales/v2/es":2}],11:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('underscore'),
    contains = _.contains,
    extend = _.extend,
    keys = _.keys;

var dictionaries = require('./dictionaries');

var I18nData = function () {
  function I18nData(locale) {
    _classCallCheck(this, I18nData);

    this._locale = contains(keys(dictionaries), locale) ? locale : 'en';
    this._dictionary = dictionaries[this._locale];
  }

  _createClass(I18nData, [{
    key: 'data',
    value: function data() {
      //return keys(this._dictionary).reduce((res, k) => extend(res, this._dictionary[k]), {});
      return extend({}, this._dictionary);
    }
  }, {
    key: 'translatorFactory',
    value: function translatorFactory() {
      var self = {

        /**
         * Get the value for the given key from the dictionary.
         *
         * @param dictionary A dictionary with String keys and String values.
         * @param key A key. Can contain '.' to indicate key's present in sub-dictionaries.
         *                   For example 'application.name' looks up for the 'application' key
         *                   in the dictionary and, with it's value, looks up for the 'name' key.
         * @param defaultValue A value to return if the key is not in the dictionary.
         * @returns The value from the dictionary.
         */
        getKey: function getKey(dictionary, key, defaultValue) {
          var i,
              parts = key.split('.'),
              value = dictionary;

          for (i = 0; i < parts.length; i = i + 1) {
            value = value[parts[i]];
            if (!value) {
              value = defaultValue;
              break;
            }
          }
          return value;
        },

        /**
         * Creates a translation function given a dictionary of translations
         * and an optional backup dictionary if the key is no present in the
         * first one. The key is returned if not found in the dictionaries.
         * @param translations A translation dictionary.
         * @param defaults A translation dictionary.
         * @returns {Function} A translator.
         */
        createTranslator: function createTranslator(translations, defaults) {
          defaults = defaults || {};
          var _this = this;
          return function (key) {
            var value = self.getKey(translations, key, null);
            if (value === null) {
              value = _this.getKey(defaults, key, key);
            }
            return value;
          };
        }
      };
      return self;
    }
  }]);

  return I18nData;
}();

module.exports = I18nData;

},{"./dictionaries":8,"underscore":7}],12:[function(require,module,exports){
'use strict';
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../../locales/v2/ja');

},{"../../../locales/v2/ja":3}],13:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"./en":14,"./es":15,"./ja":17,"dup":8}],14:[function(require,module,exports){
'use strict';
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../../locales/v3/en');

},{"../../../locales/v3/en":4}],15:[function(require,module,exports){
'use strict';
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../../locales/v3/es');

},{"../../../locales/v3/es":5}],16:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('underscore'),
    contains = _.contains,
    extend = _.extend,
    keys = _.keys;

var dictionaries = require('./dictionaries');

var I18nData = function () {
  function I18nData(locale) {
    _classCallCheck(this, I18nData);

    this._locale = contains(keys(dictionaries), locale) ? locale : 'en';
    this._dictionary = dictionaries[this._locale];
  }

  _createClass(I18nData, [{
    key: 'data',
    value: function data() {
      return extend({}, this._dictionary);
    }
  }, {
    key: 'translatorFactory',
    value: function translatorFactory() {
      var self = {

        /**
         * Get the value for the given key from the dictionary.
         *
         * @param dictionary A dictionary with String keys and String values.
         * @param key A key. Can contain '.' to indicate key's present in sub-dictionaries.
         *                   For example 'application.name' looks up for the 'application' key
         *                   in the dictionary and, with it's value, looks up for the 'name' key.
         * @param defaultValue A value to return if the key is not in the dictionary.
         * @returns The value from the dictionary.
         */
        getKey: function getKey(dictionary, key, defaultValue) {
          var i,
              parts = key.split('.'),
              value = dictionary;

          for (i = 0; i < parts.length; i = i + 1) {
            value = value[parts[i]];
            if (!value) {
              value = defaultValue;
              break;
            }
          }
          return value;
        },

        /**
         * Creates a translation function given a dictionary of translations
         * and an optional backup dictionary if the key is no present in the
         * first one. The key is returned if not found in the dictionaries.
         * @param translations A translation dictionary.
         * @param defaults A translation dictionary.
         * @returns {Function} A translator.
         */
        createTranslator: function createTranslator(translations, defaults) {
          defaults = defaults || {};
          var _this = this;
          return function (key) {
            var value = self.getKey(translations, key, null);
            if (value === null) {
              value = _this.getKey(defaults, key, key);
            }
            return value;
          };
        }
      };

      return self;
    }
  }]);

  return I18nData;
}();

module.exports = I18nData;

},{"./dictionaries":13,"underscore":7}],17:[function(require,module,exports){
'use strict';
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../../locales/v3/ja');

},{"../../../locales/v3/ja":6}],18:[function(require,module,exports){
/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('underscore');
var extend = _.extend;
var pick = _.pick;

var format = require('./utilities/format');
var comparators = require('./utilities/comparators');

var I18nDataV2 = require('./i18n/v2');
var I18nDataV3 = require('./i18n/v3');
var PersonalityProfileV2 = require('./profiles/v2/index');
var PersonalityProfileV3 = require('./profiles/v3/index');
var defaultVersion = 'v2';

var CIRCUMPLEX_ORDER_OF_PERSONALITY_TRAITS = 'EANOC';

var TextSummary = function () {
  function TextSummary(options) {
    _classCallCheck(this, TextSummary);

    this._options = extend(this.defaultOptions(), pick(options, 'locale', 'format', 'version'));
    this._version = typeof this._options.version !== 'undefined' ? this._options.version : defaultVersion;

    // Select localization dictionary based on the version of PI, V2 or V3
    if (this._version === 'v3') {
      this._i18n = new I18nDataV3(this._options.locale);
    } else {
      this._i18n = new I18nDataV2(this._options.locale);
    }

    this._dictionary = this._i18n.data();
    this._translatorFactory = this._i18n.translatorFactory();
    this._translator = this._translatorFactory.createTranslator(this._dictionary.phrases);

    this.circumplexData = this._dictionary.traits;
    this.facetsData = this._dictionary.facets;
    this.valuesData = this._dictionary.values;
    this.needsData = this._dictionary.needs;
  }

  _createClass(TextSummary, [{
    key: 'defaultOptions',
    value: function defaultOptions() {
      return {
        locale: 'en',
        version: 'v2'
      };
    }

    //getSummary(profile) {

  }, {
    key: 'getSummary',
    value: function getSummary(profile) {
      var personalityProfile = this._version === 'v3' ? new PersonalityProfileV3(profile) : new PersonalityProfileV2(profile);
      this._personalityProfile = personalityProfile;
      return this.assemble(personalityProfile).map(function (paragraph) {
        return paragraph.join(' ');
      }).join('\n');
    }

    //assemble(tree) {

  }, {
    key: 'assemble',
    value: function assemble(profile) {
      return [this.assembleTraits(profile.traits()), this.assembleFacets(profile.traits()), this.assembleNeeds(profile.needs()), this.assembleValues(profile.values())];
    }

    //assembleTraits(personalityTree) {

  }, {
    key: 'assembleTraits',
    value: function assembleTraits(traits) {
      var sentences = [],
          big5elements = [],
          relevantBig5,
          adj1,
          adj2,
          adj3;

      // Sort the Big 5 based on how extreme the number is.
      traits.forEach(function (p) {
        big5elements.push({
          id: p.id,
          percentage: p.score
        });
      });

      big5elements.sort(comparators.compareByRelevance);

      // Remove all traits with percentage values between 32% and 68%, as it's inside the common people.
      relevantBig5 = big5elements.filter(function (item) {
        return Math.abs(0.5 - item.percentage) > 0.18;
      });

      if (relevantBig5.length < 2) {
        // Even if no Big 5 attribute is interesting, you get 1 adjective.
        relevantBig5 = [big5elements[0], big5elements[1]];
      }

      adj1 = relevantBig5.length >= 2 ? this.getCircumplexAdjective(relevantBig5[0], relevantBig5[1], 0) : null;
      adj2 = relevantBig5.length >= 3 ? this.getCircumplexAdjective(relevantBig5[1], relevantBig5[2], 1) : null;
      adj3 = relevantBig5.length >= 4 ? this.getCircumplexAdjective(relevantBig5[2], relevantBig5[3], 2) : null;

      // Generate sentences summarizing personality traits composed of cross trait phrases
      switch (relevantBig5.length) {
        case 2:
          sentences.push(format(this._translator('You are %s'), adj1) + '.');
          break;
        case 3:
          sentences.push(format(this._translator('You are %s and %s'), adj1, adj2) + '.');
          break;
        case 4:
        case 5:
          sentences.push(format(this._translator('You are %s, %s and %s'), adj1, adj2, adj3) + '.');
          break;
      }

      return sentences;
    }

    //assembleFacets(personalityTree) {

  }, {
    key: 'assembleFacets',
    value: function assembleFacets(traits) {
      var sentences = [],
          facetElements = [],
          info,
          i;

      // Assemble the full list of facets and sort them based on how extreme
      // is the number.
      traits.forEach(function (p) {
        p.facets.forEach(function (f) {
          facetElements.push({
            id: f.id,
            percentage: f.score,
            parent: p
          });
        });
      });
      facetElements.sort(comparators.compareByRelevance);

      info = this.getFacetInfo(facetElements[0]);
      sentences.push(format(this._translator('You are %s'), info.term) + ': ' + info.description + '.');
      info = this.getFacetInfo(facetElements[1]);
      sentences.push(format(this._translator('You are %s'), info.term) + ': ' + info.description + '.');

      // If all the facets correspond to the same feature, continue until a
      // different parent feature is found.
      i = 2;
      if (facetElements[0].parent === facetElements[1].parent) {
        while (facetElements[0].parent === facetElements[i].parent) {
          i += 1;
        }
      }
      info = this.getFacetInfo(facetElements[i]);
      sentences.push(format(this._translator('And you are %s'), info.term) + ': ' + info.description + '.');

      return sentences;
    }

    //assembleNeeds(needsTree) {

  }, {
    key: 'assembleNeeds',
    value: function assembleNeeds(needs) {
      var sentences = [],
          needsList = [],
          word,
          sentence;

      needs.forEach(function (n) {
        needsList.push({
          id: n.id,
          percentage: n.score
        });
      });
      needsList.sort(comparators.compareByValue);

      // Get the words required.
      var need = needsList[0];
      word = this.needsData[need.id][0];

      // Form the right sentence for the single need.
      switch (this.intervalFor(needsList[0].percentage)) {
        case 0:
          sentence = this._translator('Experiences that make you feel high %s are generally unappealing to you');
          break;
        case 1:
          sentence = this._translator('Experiences that give a sense of %s hold some appeal to you');
          break;
        case 2:
          sentence = this._translator('You are motivated to seek out experiences that provide a strong feeling of %s');
          break;
        case 3:
          sentence = this._translator('Your choices are driven by a desire for %s');
          break;
      }
      sentence = format(sentence, word).concat('.');
      sentences.push(sentence);

      return sentences;
    }
  }, {
    key: 'assembleValues',
    value: function assembleValues(values) {
      var sentences = [],
          valuesList = [],
          info1,
          info2,
          sentence,
          valuesInfo,
          i,
          term1,
          term2;

      values.forEach(function (v) {
        valuesList.push({
          id: v.id,
          percentage: v.score
        });
      });
      valuesList.sort(comparators.compareByRelevance);

      // Get all the text and data required.
      info1 = this.getValueInfo(valuesList[0]);
      info2 = this.getValueInfo(valuesList[1]);

      if (this.intervalFor(valuesList[0].percentage) === this.intervalFor(valuesList[1].percentage)) {
        // Assemble the first 'both' sentence.
        term1 = info1.term;
        term2 = info2.term;
        switch (this.intervalFor(valuesList[0].percentage)) {
          case 0:
            sentence = format(this._translator('You are relatively unconcerned with both %s and %s'), term1, term2) + '.';
            break;
          case 1:
            sentence = format(this._translator('You don\'t find either %s or %s to be particularly motivating for you'), term1, term2) + '.';
            break;
          case 2:
            sentence = format(this._translator('You value both %s and %s a bit'), term1, term2) + '.';
            break;
          case 3:
            sentence = format(this._translator('You consider both %s and %s to guide a large part of what you do'), term1, term2) + '.';
            break;
        }
        sentences.push(sentence);

        // Assemble the final strings in the correct format.
        sentences.push(info1.description + '.');
        sentences.push(format(this._translator('And %s'), info2.description.toLowerCase()) + '.');
      } else {
        valuesInfo = [info1, info2];
        for (i = 0; i < valuesInfo.length; i += 1) {
          // Process it this way because the code is the same.
          switch (this.intervalFor(valuesList[i].percentage)) {
            case 0:
              sentence = format(this._translator('You are relatively unconcerned with %s'), valuesInfo[i].term);
              break;
            case 1:
              sentence = format(this._translator('You don\'t find %s to be particularly motivating for you'), valuesInfo[i].term);
              break;
            case 2:
              sentence = format(this._translator('You value %s a bit more'), valuesInfo[i].term);
              break;
            case 3:
              sentence = format(this._translator('You consider %s to guide a large part of what you do'), valuesInfo[i].term);
              break;
          }
          sentence = sentence.concat(': ').concat(valuesInfo[i].description.toLowerCase()).concat('.');
          sentences.push(sentence);
        }
      }

      return sentences;
    }

    /**
    *  getCircumplexAdjective generates a qualified cross trait phrase given two personality traits, p1 and p2
    *  p1 and p2: personality traits of the form {"id":<id>,"percentage":<percentage>}
    *  order: determines which qualifier to use for the cross trait adjective
    *      e.g., terms that are viewed negatively in Western culture are qualified with 'a bit' or 'somewhat'
    *         0: 'a bit'
    *         1: 'somewhat'
    *         2: 'can be perceived as'
    *  Returns the qualified cross trait adjective phrase for p1 and p2.
    */

  }, {
    key: 'getCircumplexAdjective',
    value: function getCircumplexAdjective(p1, p2, order) {
      var version = this._version;
      var ordered = [p1, p2].sort(function (o1, o2) {
        var i1, i2;
        if (version === 'v3') {
          i1 = CIRCUMPLEX_ORDER_OF_PERSONALITY_TRAITS.indexOf(o1.id.replace('big5_', '').charAt(0).toUpperCase());
          i2 = CIRCUMPLEX_ORDER_OF_PERSONALITY_TRAITS.indexOf(o2.id.replace('big5_', '').charAt(0).toUpperCase());
        } else {
          i1 = CIRCUMPLEX_ORDER_OF_PERSONALITY_TRAITS.indexOf(o1.id.charAt(0));
          i2 = CIRCUMPLEX_ORDER_OF_PERSONALITY_TRAITS.indexOf(o2.id.charAt(0));
        }
        return i1 < i2 ? -1 : 1;
      });

      // Assemble the identifier as the JSON file stored it.
      var identifier = ordered[0].id.concat(ordered[0].percentage > 0.5 ? '_plus_' : '_minus_').concat(ordered[1].id).concat(ordered[1].percentage > 0.5 ? '_plus' : '_minus');

      var traitMult = this.circumplexData[identifier][0];
      var sentence = '%s';

      if (traitMult.perceived_negatively) {
        switch (order) {
          case 0:
            sentence = this._translator('a bit %s');
            break;
          case 1:
            sentence = this._translator('somewhat %s');
            break;
          case 2:
            sentence = this._translator('can be perceived as %s');
            break;
        }
      }

      return format(sentence, traitMult.word);
    }
  }, {
    key: 'getValueInfo',
    value: function getValueInfo(v) {
      return {
        name: v.id,
        term: this.valuesData[v.id][0].Term.toLowerCase(),
        description: v.percentage > 0.5 ? this.valuesData[v.id][0].HighDescription : this.valuesData[v.id][0].LowDescription
      };
    }
  }, {
    key: 'getFacetInfo',
    value: function getFacetInfo(f) {
      return {
        name: f.id,
        term: f.percentage > 0.5 ? this.facetsData[f.id].HighTerm.toLowerCase() : this.facetsData[f.id].LowTerm.toLowerCase(),
        description: f.percentage > 0.5 ? this.facetsData[f.id].HighDescription.toLowerCase() : this.facetsData[f.id].LowDescription.toLowerCase()
      };
    }
  }, {
    key: 'intervalFor',
    value: function intervalFor(p) {
      return Math.min(Math.floor(p * 4), 3);
    }
  }]);

  return TextSummary;
}();

module.exports = TextSummary;

},{"./i18n/v2":11,"./i18n/v3":16,"./profiles/v2/index":19,"./profiles/v3/index":20,"./utilities/comparators":21,"./utilities/format":22,"underscore":7}],19:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersonalityProfile = function () {
  function PersonalityProfile(profile) {
    _classCallCheck(this, PersonalityProfile);

    this._traits = profile.tree.children[0].children[0].children;
    this._needs = profile.tree.children[1].children[0].children;
    this._values = profile.tree.children[2].children[0].children;
  }

  _createClass(PersonalityProfile, [{
    key: 'traits',
    value: function traits() {
      return this._traits.map(function (t) {
        return {
          id: t.id,
          name: t.name,
          category: t.category,
          score: t.percentage,
          facets: t.children.map(function (f) {
            return {
              //id: f.id,
              id: f.id.replace(/_/g, '-').replace(/ /g, '-'),
              name: f.name,
              category: f.category,
              score: f.percentage
            };
          })
        };
      });
    }
  }, {
    key: 'needs',
    value: function needs() {
      return this._needs.map(function (n) {
        return {
          id: n.id,
          name: n.name,
          category: n.category,
          score: n.percentage
        };
      });
    }
  }, {
    key: 'values',
    value: function values() {
      return this._values.map(function (v) {
        return {
          //id: v.id,
          id: v.id.replace(/_/g, '-').replace(/ /g, '-'),
          name: v.name,
          category: v.category,
          score: v.percentage
        };
      });
    }
  }]);

  return PersonalityProfile;
}();

module.exports = PersonalityProfile;

},{}],20:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersonalityProfile = function () {
  function PersonalityProfile(profile) {
    _classCallCheck(this, PersonalityProfile);

    this._traits = profile.personality;
    this._needs = profile.needs;
    this._values = profile.values;
  }

  _createClass(PersonalityProfile, [{
    key: 'traits',
    value: function traits() {
      return this._traits.map(function (t) {
        return {
          id: t.trait_id,
          name: t.name,
          category: t.category,
          score: t.percentile,
          facets: t.children.map(function (f) {
            return {
              id: f.trait_id,
              name: f.name,
              category: f.category,
              score: f.percentile
            };
          })
        };
      });
    }
  }, {
    key: 'needs',
    value: function needs() {
      return this._needs.map(function (n) {
        return {
          id: n.trait_id,
          name: n.name,
          category: n.category,
          score: n.percentile
        };
      });
    }
  }, {
    key: 'values',
    value: function values() {
      return this._values.map(function (v) {
        return {
          id: v.trait_id,
          name: v.name,
          category: v.category,
          score: v.percentile
        };
      });
    }
  }]);

  return PersonalityProfile;
}();

module.exports = PersonalityProfile;

},{}],21:[function(require,module,exports){
"use strict";

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function compareByRelevance(o1, o2) {
  var result = 0;

  if (Math.abs(0.5 - o1.percentage) > Math.abs(0.5 - o2.percentage)) {
    result = -1; // A trait with 1% is more interesting than one with 60%.
  }

  if (Math.abs(0.5 - o1.percentage) < Math.abs(0.5 - o2.percentage)) {
    result = 1;
  }

  return result;
}

function compareByValue(o1, o2) {
  var result = 0;

  if (Math.abs(o1.percentage) > Math.abs(o2.percentage)) {
    result = -1; // 100 % has precedence over 99%
  }

  if (Math.abs(o1.percentage) < Math.abs(o2.percentage)) {
    result = 1;
  }

  return result;
}

module.exports = {
  compareByRelevance: compareByRelevance,
  compareByValue: compareByValue
};

},{}],22:[function(require,module,exports){
'use strict';

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Given a template string to format and serveral strings
 * to fill the template, it returns the formatted string.
 * @param template This is a string containing zero, one or
 *                 more occurrences of "%s".
 * @param ...strings
 * @returns The formattted template.
 */
function format(subject) {
  'use strict';

  var replaces = Array.prototype.slice.apply(arguments, [1, arguments.length]),
      parts = null,
      output,
      i;

  if (subject.match(/%s/g) === null && replaces.length > 0 || replaces.length !== subject.match(/%s/g).length) {
    throw 'Format error: The string count to replace do not matches the argument count. Subject: ' + subject + '. Replaces: ' + replaces;
  }

  output = subject;
  for (i = 1; i < arguments.length; i += 1) {
    parts = output.split('%s');
    output = parts[0] + arguments[i] + parts.slice(1, parts.length).join('%s');
  }

  return output;
}

module.exports = format;

},{}]},{},[18])(18)
});