
import AbilitySelection from '../components/AbilitySelection.vue'
import Department from '../components/Department.vue'
import FoorTwo from '../components/FoorTwo.vue'


const routes = [
    {
        path: '/',
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