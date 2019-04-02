import {expectType} from 'tsd';
import pImmediate = require('.');

expectType<Promise<void>>(pImmediate());
