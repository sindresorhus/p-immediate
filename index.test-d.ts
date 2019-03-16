import {expectType} from 'tsd-check';
import pImmediate from '.';

expectType<Promise<string>>(pImmediate('foo'));
