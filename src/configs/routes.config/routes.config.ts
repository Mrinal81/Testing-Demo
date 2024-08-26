import { lazy } from 'react'
import authRoute from './authRoute'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/IHRC/components/Home/Home')),
        authority: [],
    },
    /** Example purpose only, please remove */
    {
        key: 'singleMenuItem',
        path: '/single-menu-view',
        component: lazy(() => import('@/views/IHRC/components/demo/SingleMenuView')),
        authority: [],
    },
    {
        key: 'complianceDetail.item1',
        path: '/collapse-menu-item-view-1',
        component: lazy(() => import('@/views/IHRC/components/demo/recommendedList/RecommendedList')),
        authority: [],
    },
    
    {
        key: 'complianceDetail.complianceItem',
        path:  `${APP_PREFIX_PATH}/IHRC/compliance-list-detail/:complianceID`,
        component: lazy(() => import('@/views/IHRC/components/demo/complianceRowDetails/ComplianceRowDetails')),
        authority: [],
    },
    {
        key: 'recommendedList.item2',
        path: '/collapse-menu-item-view-2',
        component: lazy(() => import('@/views/IHRC/components/demo/complianceDetails/ComplianceDetails')),
        authority: [],
    },
    {
        key: 'recommendedList.item3',
        path: '/collapse-menu-item-view-3',
        component: lazy(() => import('@/views/IHRC/components/demo/assignChecklist/AssignChecklist')),
        authority: [],
    },
    {
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: lazy(() =>
            import('@/views/IHRC/components/demo/GroupSingleMenuItemView')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: lazy(() =>
            import('@/views/IHRC/components/demo/GroupCollapseMenuItemView1')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: lazy(() =>
            import('@/views/IHRC/components/demo/GroupCollapseMenuItemView2')
        ),
        authority: [],
    },
]