import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { UserService } from "src/api/userService";
import { useState } from "react";

export const useResetPasswordSendPublic = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm<{ cpf: string }>();
  const [loading, setLoading] = useState(false);

  const handleSend = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const resp = await UserService.resetPasswordSendToken(data.cpf);
      (navigation as any).navigate("ResetPasswordConfirm", { userId: resp.userId, maskedTo: data.cpf });
    } catch (error) {
      // TODO: show error
    } finally {
      setLoading(false);
    }
  });

  return { control, handleSend, loading };
};
