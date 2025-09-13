import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

// Hooks
import { useUser } from "../../hooks/useUser";

// Components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import ThemedLoader from "../../components/ThemedLoader";
import Spacer from "../../components/Spacer";
import ThemedTextInput from "../../components/ThemedTextInput";

//Utils
import errorMap from "../../utils/errorMap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { register } = useUser();

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);

    try {
      await register(email, password);

      // Include when e-mail confirmation is turned on
      // alert("Check your email to confirm your account!");
    } catch (error) {
      setError(errorMap(error));
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ThemedLoader />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText variant="title" color="text">
          Join
        </ThemedText>
        <Spacer height="40" />
        <ThemedTextInput
          style={styles.textInput}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
        <Spacer />
        <ThemedTextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        {error && (
          <ThemedText variant="text" color="danger">
            {error}
          </ThemedText>
        )}
        <Spacer />
        <ThemedButton onPress={handleSubmit}>
          <ThemedText variant="text" color="textOnPrimary">
            Confirm
          </ThemedText>
        </ThemedButton>
        <Spacer height="100" />
        <ThemedText variant="text" color="text">
          Already have an account?
        </ThemedText>
        <Link href={"/login"} asChild>
          <ThemedButton bg="secondary">
            <ThemedText variant="text" color="textOnPrimary">
              Login
            </ThemedText>
          </ThemedButton>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "80%",
    marginBottom: 20,
  },
});
