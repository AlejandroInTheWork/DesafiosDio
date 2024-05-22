while True:
    opcao = input(menu)
    if opcao == "d":
        valor = float(input("Informe o valor do depósito: "))
        
        if valor > 0:
            saldo += valor
            extrato += f"Depósito: R$ {valor:.2f}\n"
            print(f"Valor de R$ {valor:.2f} depositado com sucesso, saldo atual: R$ {saldo:.2f}")
        else:
            print("Operação falhou: O valor informado é inválido")

    elif opcao == "s":
        print("Saque")
        saque = float(input("Informe o valor do saque: "))
        
        if saque <= limite and numero_saques <= LIMITE_SAQUES:
            saldo -= saque
            numero_saques += 1
            extrato += f"saque: R$ {saque:.2f}\n"
            print(f"Valor de R$ {saque:.2f} sacado com sucesso, saldo atual: R$ {saldo:.2f}")
        else:
            print("Operação falhou: O valor informado excede o limite permitido ou limite diaria excedido")

    elif opcao == "e":
        print("\n ===================EXTRATO==================")
        print("não foram realizados movimentações." if not extrato else extrato)
        print(f"\n Saldo: R$ {saldo:.2f}")
        print("================================================")
    elif opcao == "q":
        break
    else:
        print("Operação inválida, por favor selecione novamente a operação desejada.")
