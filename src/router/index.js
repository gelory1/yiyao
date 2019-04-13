
import AbilitySelection from '../components/AbilitySelection.vue';
import Department from '../components/Department.vue';
import FoorTwo from '../components/FoorTwo.vue';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Lesson from '../components/Lesson.vue';


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/lesson',
        component: Lesson
    },
    {
        path: '/lesson1',
        component: FoorTwo
    },
    {
        path: '/abilityselection/:id/:step',
        component: AbilitySelection
    },
    {
        path: '/department/:id/:ableId/:step',
        component: Department
    },
]


export default routes