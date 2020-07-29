import React from 'react';

// Material imports
import { Alert } from '@material-ui/lab';

// constants
import * as CONSTANTS from './constants';

interface IndicatorProps {
    length: number;
}

export const ToDoIndicator: React.FC<IndicatorProps> = ({ length }) => {
    const isEmpty = length === 0;
    return (
        <Alert severity={(isEmpty && 'info') || 'success'}>
            {(isEmpty && CONSTANTS.EMPTY_INDICATOR) || CONSTANTS.HAS_TODO_INDICATOR}
        </Alert>
    )
}