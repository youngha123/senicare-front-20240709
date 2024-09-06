import { useEffect } from 'react';
import './Senicare.css';
import Auth from 'src/views/Auth';
import { Route, Routes, useNavigate } from 'react-router';
import MainLayout from './layouts/MainLayout';
import { useCookies } from 'react-cookie';
import { ACCESS_TOKEN, AUTH_ABSOLUTE_PAHT, AUTH_PAHT, CS_ABSOLUT_PATH, CS_DETAIL_PATH, CS_PATH, CS_UPDATE_PATH, CS_WRITE_PATH, HR_DETAIL_PATH, HR_PATH, MM_PATH, OTHERS_PATH } from './constants';
import CS from './views/CS';
import CSWrite from './views/CS/Write';
import CSDetail from './views/CS/Detail';
import CSUpdate from './views/CS/Update';
import MM from './views/MM';
import HR from './views/HR';
import HRDetail from './views/HR/Detail';

// component: root path 컴포넌트 //
function Index() {

    // state: 쿠키 상태 //
    const [cookies] = useCookies();

    // function: 네비게이터 함수 //
    const navigator = useNavigate();

    // effect: 마운트 시 경로 이동 effect //
    useEffect(() => {
        if (cookies[ACCESS_TOKEN]) navigator(CS_ABSOLUT_PATH);
        else navigator(AUTH_ABSOLUTE_PAHT);
    }, []);

    // render: root path 컴포넌트 렌더링 //
    return (
        <></>
    );
}

// component: Senicare 컴포넌트 //
export default function Senicare() {

    // render: Senicare 컴포넌트 렌더링 //
    return (
        <Routes>
            <Route index element={<Index />} />
            <Route path={AUTH_PAHT} element={<Auth />} />
            <Route path={CS_PATH} element={<MainLayout />}>
                <Route index element={<CS />} />
                <Route path={CS_WRITE_PATH} element={<CSWrite />} />
                <Route path={CS_DETAIL_PATH(':customNumber')} element={<CSDetail />} />
                <Route path={CS_UPDATE_PATH(':customNumber')} element={<CSUpdate />} />
            </Route>
            <Route path={MM_PATH} element={<MainLayout />}>
                <Route index element={<MM />} />
            </Route>
            <Route path={HR_PATH} element={<MainLayout />}>
                <Route index element={<HR />} />
                <Route path={HR_DETAIL_PATH(':userId')} element={<HRDetail />} />
            </Route>
            <Route path={OTHERS_PATH} element={<Index />} />
        </Routes>
    );
}