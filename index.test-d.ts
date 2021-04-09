import {expectType} from 'tsd';
import pImmediate from './index.js';

expectType<Promise<void>>(pImmediate());
