import React, { Suspense } from 'react';
import Categories from '../component/Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;