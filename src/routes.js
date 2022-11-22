import DisplayData from './view/DisplayData.vue'
import EditData from './view/EditData.vue'
import AddData from './view/AddData.vue'


export default [
    { path: '/', component: DisplayData },
    { path: '/add', component: AddData },
    { path: '/edit/:id', component: EditData },
]