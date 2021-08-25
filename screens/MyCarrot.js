import React from "react";
import {
  TouchableNativeFeedback,
  Text,
  ScrollView,
  View,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MyCarrot = (props) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.owner}>
        <TouchableNativeFeedback>
          <View style={styles.profileContainer}>
            <View style={styles.profile}>
              <Ionicons name="person-circle-outline" size={60} />
              <Text style={styles.ownerId}>sk</Text>
            </View>
            <View style={styles.button}>
              <TouchableNativeFeedback onPress={() => {}}>
                <View>
                  <Text style={styles.buttonText}>프로필 보기</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </TouchableNativeFeedback>

        <View style={styles.list}>
          <TouchableNativeFeedback>
            <View
              style={{
                width: 110,
                paddingTop: 30,
                paddingHorizontal: 30,
              }}
            >
              <Ionicons name="list-circle-outline" size={55} />
              <Text style={{ textAlign: "center", fontSize: 15 }}>
                판매내역
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View
              style={{
                width: 110,
                paddingTop: 30,
                paddingHorizontal: 30,
              }}
            >
              <Ionicons name="information-circle-outline" size={55} />
              <Text style={{ textAlign: "center", fontSize: 15 }}>
                구매내역
              </Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            onPress={() => {
              props.navigation.navigate("FavoriteScreen");
            }}
          >
            <View
              style={{
                width: 110,
                paddingTop: 30,
                paddingHorizontal: 30,
              }}
            >
              <Ionicons name="heart-circle-outline" size={55} />
              <Text style={{ textAlign: "center", fontSize: 15 }}>
                관심목록
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>

      <View style={styles.settings}>
        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="location-outline" size={30} />
            </View>
            <Text style={styles.text}>내 동네 설정</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="locate-outline" size={30} />
            </View>
            <Text style={styles.text}>동네 인증하기</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="pricetag-outline" size={30} />
            </View>
            <Text style={styles.text}>키워드 알림</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="grid-outline" size={30} />
            </View>
            <Text style={styles.text}>모아보기</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="options-outline" size={30} />
            </View>
            <Text style={styles.text}>관심 카테고리 설정</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <View style={styles.short}>
        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="create-outline" size={30} />
            </View>
            <Text style={styles.text}>동네생활 글</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="chatbubble-ellipses-outline" size={30} />
            </View>
            <Text style={styles.text}>동네생활 댓글</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="star-outline" size={30} />
            </View>
            <Text style={styles.text}>동네생활 주제 목록</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <View style={styles.short}>
        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="create-outline" size={30} />
            </View>
            <Text style={styles.text}>비즈프로필 만들기</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="chatbubble-ellipses-outline" size={30} />
            </View>
            <Text style={styles.text}>동네홍보 글</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="star-outline" size={30} />
            </View>
            <Text style={styles.text}>지역광고</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <View style={styles.long}>
        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="mail-outline" size={30} />
            </View>
            <Text style={styles.text}>친구초대</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="share-social-outline" size={30} />
            </View>
            <Text style={styles.text}>당근마켓 공유</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="mic-outline" size={30} />
            </View>
            <Text style={styles.text}>공지사항</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="headset-outline" size={30} />
            </View>
            <Text style={styles.text}>자주 묻는 질문</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={styles.setting}>
            <View style={{ paddingTop: 10 }}>
              <Ionicons name="settings-outline" size={30} />
            </View>
            <Text style={styles.text}>앱 설정</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  owner: {
    height: 300,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 8,
  },
  profileContainer: {
    flexDirection: "column",
    height: 130,
    borderBottomColor: "#ccc",
    // borderBottomWidth: 10,
  },
  profile: {
    height: 90,
    padding: 10,
    flexDirection: "row",
    // borderBottomWidth: 10,
    // borderBottomColor: "#ccc",
  },
  ownerId: {
    paddingTop: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    borderRightColor: "#ccc",
    borderLeftColor: "#ccc",
    borderTopColor: "#ccc",
    borderBottomColor: "#ccc",
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 13,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
  },
  list: {
    height: 170,
    flexDirection: "row",
    paddingBottom: 15,
    justifyContent: "center",
  },
  settings: {
    height: 300,
    paddingTop: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 8,
  },
  setting: {
    height: 56,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  text: {
    paddingTop: 15, /////////////////////////
    fontSize: 16,
    paddingHorizontal: 10,
  },
  short: {
    height: 190,
    paddingTop: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 8,
  },
  long: {
    height: 300,
    paddingTop: 10,
  },
});

export default MyCarrot;
