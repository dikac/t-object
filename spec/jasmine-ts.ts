import Jasmine from './jasmine'
import JasmineTsReporter from 'jasmine-ts-console-reporter'

Jasmine.env.clearReporters();
Jasmine.env.addReporter(new JasmineTsReporter());
Jasmine.execute()
