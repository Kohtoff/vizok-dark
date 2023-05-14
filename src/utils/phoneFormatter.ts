export const phoneNumberAutoFormat = (phoneNumber: string): string => {
    const number = phoneNumber.trim().replace(/[^0-9]/g, "");

    if (number.length < 4) return number.replace(/(\d{3})/, '+$1');
    if (number.length < 7) return number.replace(/(\d{3})(\d{2})/, "+$1 $2");
    if (number.length <= 11) return number.replace(/(\d{3})(\d{2})(\d{3})/, "+$1 $2 $3");
    return number.replace(/(\d{3})(\d{2})(\d{3})(\d{4})/, "+$1 $2 $3 $4");
  };
