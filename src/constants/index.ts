// React Deisgn Patterns and Best Practices
import C3_CLEANING_CODE from './React_Design_Patterns_and_Best_Practices/c3-cleaning_code'
import C4_POPULAR_COMPOSITION from './React_Design_Patterns_and_Best_Practices/c4-popular_composition'
import C5_WRITING_CODE_FOR_THE_BROWSER from './React_Design_Patterns_and_Best_Practices/c5-writing_code_for_the_browser'
import C7_ANTIPATTERNS_TO_BE_AVOIDED from './React_Design_Patterns_and_Best_Practices/c7-antipatters_to_be_avoided'
import C8_REACT_HOOKS from './React_Design_Patterns_and_Best_Practices/c8-react_hooks'
import C9_REACT_ROUTER from './React_Design_Patterns_and_Best_Practices/c9-react_router'
import C10_REACT_18_NEW_FEATURES from './React_Design_Patterns_and_Best_Practices/c10-react_18_new_features'
import C11_MANAGING_DATA from './React_Design_Patterns_and_Best_Practices/c11-managing_data'
import C12_SERVER_SIDE_RENDERING from "./React_Design_Patterns_and_Best_Practices/c12-server-side_rendering"
import C13_UNDERSTANDING_GRAPHQL from './React_Design_Patterns_and_Best_Practices/c13-understanding_graphql'


// Beginning GraphQL with React, NodeJS, and Apollo
import C1 from "./Beginning_GraphQL_with_React_Nodejs_Apollo/c1"
import C2 from "./Beginning_GraphQL_with_React_Nodejs_Apollo/c2"
import C3 from "./Beginning_GraphQL_with_React_Nodejs_Apollo/c3"
import C4 from "./Beginning_GraphQL_with_React_Nodejs_Apollo/c4"
import C5 from "./Beginning_GraphQL_with_React_Nodejs_Apollo/c5"


// Testing JavaScript Applications
import C1_INTRO_TO_AUTOMATED_TESTING from "./Testing_Javascript_Applications/c1"
import C2_WHAT_TO_TEST_AND_WHEN from "./Testing_Javascript_Applications/c2"
import C3_TESTING_TECHNIQUES from "./Testing_Javascript_Applications/c3"


import {
  INavItems,
  INavItemsValue
} from "@/ui/MenuWithTitle"

/**
 * TODO:
 * - learn how to implement nested Typescript types
 */

interface INoteData {
  problem: string
  title: string
  desc?: string
  sample?: string
}

export const notesNav: INavItems = {
  "react_18_design_patterns_and_best_practices": [
    {
      bookId: 'react_18_design_patterns_and_best_practices',
      id: 'react-c3',
      book: 'React 18 Design Patterns and Best Practices',
      title: 'Cleaning up code',
      data: C3_CLEANING_CODE
    },
    {
      bookId: 'react_18_design_patterns_and_best_practices',
      id: 'react-c4',
      book: 'React 18 Design Patterns and Best Practices',
      title: 'Exploring Popular Composition Patterns',
      data: C4_POPULAR_COMPOSITION
    },
    {
      bookId: 'react_18_design_patterns_and_best_practices',
      id: 'react-c5',
      book: 'React 18 Design Patterns and Best Practices',
      title: 'Writing Code for the Browser',
      data: C5_WRITING_CODE_FOR_THE_BROWSER
    },
    {
      bookId: 'react_18_design_patterns_and_best_practices',
      id: 'react-c7',
      book: 'React 18 Design Patterns and Best Practices',
      title: 'Anti-Patterns to be Avoided',
      data: C7_ANTIPATTERNS_TO_BE_AVOIDED
    },
    {
      bookId: 'react_18_design_patterns_and_best_practices',
      id: 'react-c8',
      book: 'React 18 Design Patterns and Best Practices',
      title: 'React Hooks',
      data: C8_REACT_HOOKS
    },
    {
      bookId: 'react_18_design_patterns_and_best_practices',
      id: 'react-c9',
      book: 'React 18 Design Patterns and Best Practices',
      title: 'React Router',
      data: C9_REACT_ROUTER
    },
    {
      bookId: 'react_18_design_patterns_and_best_practices',
      id: 'react-c10',
      book: 'React 18 Design Patterns and Best Practices',
      title: 'React 18 New Features',
      data: C10_REACT_18_NEW_FEATURES
    },
    {
      bookId: 'react_18_design_patterns_and_best_practices',
      id: 'react-c11',
      book: 'React 18 Design Patterns and Best Practices',
      title: 'Managing Data',
      data: C11_MANAGING_DATA
    },
    {
      bookId: 'react_18_design_patterns_and_best_practices',
      id: 'react-c12',
      book: 'React 18 Design Patterns and Best Practices',
      title: 'Server-side Rendering',
      data: C12_SERVER_SIDE_RENDERING
    },
    {
      bookId: 'react_18_design_patterns_and_best_practices',
      id: 'react-c13',
      book: 'React 18 Design Patterns and Best Practices',
      title: 'Understanding GraphQL',
      data: C13_UNDERSTANDING_GRAPHQL
    }
  ],
  "beginning_graphql_with_react_nodejs_and_apollo": [
    {
      bookId: 'beginning_graphql_with_react_nodejs_and_apollo',
      id: 'graphql-c1',
      book: 'Beginning GraphQL with React, NodeJS, and Apollo',
      title: 'Introduction to GraphQL',
      data: C1
    },
    {
      bookId: 'beginning_graphql_with_react_nodejs_and_apollo',
      id: 'graphql-c2',
      book: 'Beginning GraphQL with React, NodeJS, and Apollo',
      title: 'Setting up our Todo App',
      data: C2
    },
    {
      bookId: 'beginning_graphql_with_react_nodejs_and_apollo',
      id: 'graphql-c3',
      book: 'Beginning GraphQL with React, NodeJS, and Apollo',
      title: 'Specifying our Schema',
      data: C3
    },
    {
      bookId: 'beginning_graphql_with_react_nodejs_and_apollo',
      id: 'graphql-c4',
      book: 'Beginning GraphQL with React, NodeJS, and Apollo',
      title: 'GraphQL Queries',
      data: C4
    },
    {
      bookId: 'beginning_graphql_with_react_nodejs_and_apollo',
      id: 'graphql-c5',
      book: 'Beginning GraphQL with React, NodeJS, and Apollo',
      title: 'Using MongoDB as our Database',
      data: C5
    },
  ],
  "testing_javaScript_applications": [
    {
      bookId: 'testing_javaScript_applications',
      id: 'testing-c1',
      book: 'Testing JavaScript Applications',
      title: 'An introduction to automated testing',
      data: C1_INTRO_TO_AUTOMATED_TESTING
    },
    {
      bookId: 'testing_javaScript_applications',
      id: 'testing-c2',
      book: 'Testing JavaScript Applications',
      title: 'What to test and when?',
      data: C2_WHAT_TO_TEST_AND_WHEN
    },
    {
      bookId: 'testing_javaScript_applications',
      id: 'testing-c3',
      book: 'Testing JavaScript Applications',
      title: 'Testing techniques',
      data: C3_TESTING_TECHNIQUES
    }
  ],
  "a_common_sense_guide_to_data_structures_and_algorithms": [
    {
      bookId: 'a_common_sense_guide_to_data_structures_and_algorithms',
      id: '',
      book: 'A Common-Sense Guide to Data Structures and Algorithms',
      title: 'Sample Title', 
      data: []
    },
  ]
}
