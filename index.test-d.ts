import {expectType} from 'tsd-check';
import pImmediate from '.';

expectType<Promise<void>>(pImmediate());
