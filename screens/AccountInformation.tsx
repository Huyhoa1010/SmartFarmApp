/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/colors';

const AccountInformation = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 100,
        backgroundColor: colors.primary,
      }}>
      <View
        style={{
          height: 70,
          backgroundColor: colors.font,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.push('Main')}>
          <Icon
            name={'angle-left'}
            style={{
              color: colors.primary,
              fontSize: 30,
              marginLeft: 20,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: colors.primary,
            }}>
            Settings
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            height: 50,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: 15,
              paddingStart: 10,
            }}>
            Account
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              name="address-card"
              size={20}
              style={{
                color: 'black',
                paddingStart: 10,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                paddingStart: 20,
              }}>
              Personal information
            </Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <Icon
              name="angle-right"
              size={20}
              style={{
                color: 'black',
                paddingEnd: 10,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              name="mail-bulk"
              size={20}
              style={{
                color: 'black',
                paddingStart: 10,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                paddingStart: 20,
              }}>
              Send support request
            </Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <Icon
              name="angle-right"
              size={20}
              style={{
                color: 'black',
                paddingEnd: 10,
              }}
            />
          </View>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
              }}>
              <Icon
                name="lock"
                size={20}
                style={{
                  color: 'black',
                  paddingStart: 10,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  paddingStart: 20,
                }}>
                Change Password
              </Text>
              <View
                style={{
                  flex: 1,
                }}
              />
              <Icon
                name="angle-right"
                size={20}
                style={{
                  color: 'black',
                  paddingEnd: 10,
                }}
              />
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
        <View
          style={{
            height: 50,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: 15,
              paddingStart: 10,
            }}>
            Gateway
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              name="door-closed"
              size={20}
              style={{
                color: 'black',
                paddingStart: 10,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                paddingStart: 20,
              }}>
              Gateway management
            </Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <Icon
              name="angle-right"
              size={20}
              style={{
                color: 'black',
                paddingEnd: 10,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              name="exchange-alt"
              size={20}
              style={{
                color: 'black',
                paddingStart: 10,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                paddingStart: 20,
              }}>
              Change Gateway
            </Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <Icon
              name="angle-right"
              size={20}
              style={{
                color: 'black',
                paddingEnd: 10,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              name="qrcode"
              size={20}
              style={{
                color: 'black',
                paddingStart: 10,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                paddingStart: 20,
              }}>
              Scan Gateway code
            </Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <Icon
              name="angle-right"
              size={20}
              style={{
                color: 'black',
                paddingEnd: 10,
              }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 50,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: 15,
              paddingStart: 10,
            }}>
            Devices
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              name="calendar-alt"
              size={20}
              style={{
                color: 'black',
                paddingStart: 10,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                paddingStart: 20,
              }}>
              Schedule
            </Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <Icon
              name="angle-right"
              size={20}
              style={{
                color: 'black',
                paddingEnd: 10,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              name="calendar-day"
              size={20}
              style={{
                color: 'black',
                paddingStart: 10,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                paddingStart: 20,
              }}>
              Script
            </Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <Icon
              name="angle-right"
              size={20}
              style={{
                color: 'black',
                paddingEnd: 10,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              name="book"
              size={20}
              style={{
                color: 'black',
                paddingStart: 10,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                paddingStart: 20,
              }}>
              Control rules
            </Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <Icon
              name="angle-right"
              size={20}
              style={{
                color: 'black',
                paddingEnd: 10,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              name="barcode"
              size={20}
              style={{
                color: 'black',
                paddingStart: 10,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                paddingStart: 20,
              }}>
              Scan devices
            </Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <Icon
              name="angle-right"
              size={20}
              style={{
                color: 'black',
                paddingEnd: 10,
              }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 50,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: 15,
              paddingStart: 10,
            }}>
            More
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              name="language"
              size={20}
              style={{
                color: 'black',
                paddingStart: 10,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                paddingStart: 20,
              }}>
              Language
            </Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                paddingEnd: 10,
              }}>
              English
            </Text>
            <Icon
              name="angle-right"
              size={20}
              style={{
                color: 'black',
                paddingEnd: 10,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              name="bell"
              size={20}
              style={{
                color: 'black',
                paddingStart: 10,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                paddingStart: 20,
              }}>
              Notification
            </Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <Icon
              name="angle-right"
              size={20}
              style={{
                color: 'black',
                paddingEnd: 10,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              name="sign-out-alt"
              size={20}
              style={{
                color: 'black',
                paddingStart: 10,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                paddingStart: 20,
              }}>
              Sign out
            </Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <Icon
              name="angle-right"
              size={20}
              style={{
                color: 'black',
                paddingEnd: 10,
              }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AccountInformation;
