import Navigation from './services/Navigation';
import { registerScreens } from './screens';
import addOptionsProcessors from './commons/OptionProcessors';
import { setDefaultOptions } from './commons/Options';
import testIDs from './testIDs';
import Screens from './screens/Screens';

// @ts-ignore
alert = (title, message) =>
  Navigation.showOverlay({
    component: {
      name: Screens.Alert,
      passProps: {
        title,
        message,
      },
    },
  });

function start() {
  registerScreens();
  addOptionsProcessors();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setRoot();
  });
}

function setRoot() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Layouts',
                    options: {
                      topBar: {
                        title: {
                          text: 'Layouts',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                topBar: {
                  title: {
                    text: 'Layouts',
                  },
                },
                bottomTab: {
                  text: 'Layouts',
                  icon: require('../img/layouts.png'),
                  selectedIcon: require('../img/layouts_selected.png'),
                  testID: testIDs.LAYOUTS_TAB,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Options',
                    options: {
                      topBar: {
                        title: {
                          text: 'Options',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                topBar: {
                  title: {
                    text: 'Default Title',
                  },
                },
                bottomTab: {
                  text: 'Options',
                  icon: require('../img/options.png'),
                  selectedIcon: require('../img/options_selected.png'),
                  testID: testIDs.OPTIONS_TAB,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Navigation',
                  },
                },
              ],
              options: {
                topBar: {
                  title: {
                    text: 'Default Title',
                  },
                },
                bottomTab: {
                  text: 'Navigation',
                  icon: require('../img/options.png'),
                  selectedIcon: require('../img/options_selected.png'),
                  testID: testIDs.OPTIONS_TAB,
                },
              },
            },
          },
        ],
      },
    },
  });
}

export { start };
