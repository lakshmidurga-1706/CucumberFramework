package tesRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"Featurefiles"},monochrome=true,glue = {"stepDefination"},plugin = {"pretty","html:taget/cucumber-reports"})
public class Runner {

}
